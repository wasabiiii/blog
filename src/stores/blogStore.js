import { observable, computed, action ,configure} from 'mobx';
import request from '../util/request';

// configure({ enforceActions: true })

class BlogStore{
    @observable allBlog = [];//所有blog
    @observable pageBlog = [];//当前页显示的blog

    @observable allBlogCount = 0;//所有blog数量

    @observable pageActiveIndex = 1;

    // 获取总共分页页数
    @computed get allPageCount() {
        return Math.ceil(this.allBlogCount / 5);
    }

    @action loadPageBlog(){
        console.log(this.pageActiveIndex)
        this.pageBlog = this.allBlog.slice((this.pageActiveIndex-1)*5,(this.pageActiveIndex-1)*5+5);
    }


    @action fetchPageBlog(){
        fetch('/api/blog',{credentials: 'include'})
            .then((response) => response.json())
            .then((resData) => {
                    console.log(resData);
                    if(resData.status == 1){
                        // this.setState({
                        //     data: resData.data,
                        // });
                        this.allBlog = resData.data;
                        this.allBlogCount = resData.count;
                    }
                })
            .then(() => this.loadPageBlog())
            .catch((err) => {
                console.log(err);
            })
    }


    //分页
    @action setPaginationIndex(index) {
      this.pageActiveIndex = index;
      this.loadPageBlog();
    }
    
}
export default new BlogStore();