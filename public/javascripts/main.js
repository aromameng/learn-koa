$(function(){
  $('#addBtn').on('click',function(){
    // console.log(11)
    $.ajax({
      url:'http://localhost:3000/post/addPost',
      type:'POST'
    }).then(function(result){
      console.log(result)
      location.reload()
    })
  })
})