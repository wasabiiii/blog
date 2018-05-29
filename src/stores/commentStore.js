
import { observable, computed, action, runInAction, configure } from 'mobx';
import request from '../util/request';

// configure({ enforceActions: true })
class CommentStore{
    @observable commentList = [];//评论

    //添加评论
    @action fetchAddComment(body){
        request.post('/api/comment/add',body,resData => {
            console.log(resData);
            alert(resData.message);
            this.commentList.push()
        });
        
    }

    //获取当前文章评论
    @action fetchGetComment(blogId){
        request.get('/api/comment/'+blogId,resData => {
            runInAction(() => {
              this.commentList = resData.data;
            });
            
            console.log(this.commentList.slice());
        });
    }
}
export default new CommentStore();