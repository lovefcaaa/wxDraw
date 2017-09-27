/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-09-27 16:12:38 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-09-27 23:25:47
 * 帧动画控制器
 */

export const AnimationFrame = function(){
    // console.log('requestAnimationFrame',requestAnimationFrame);
    if(requestAnimationFrame){
        return requestAnimationFrame
    }else {
      return  fakeAnimationFrame;
    }
}


function fakeAnimationFrame(callback){
    var start,
        finish;
    setTimeout(function(){
      start = +new Date();
      callback(start);
      finish = +new Date();

    //   console.log(finish - start);
    },20);
}