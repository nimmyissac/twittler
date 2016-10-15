
      $(document).ready(function(){
        var home = streams.home;
        populate(home);
        

        $('.getTweet').on('click',function(){
          populate(home);
        });

        $('.myTweet').on('click',function(){
           writeTweet($('input').val());
           populate(home);
          });
        
        $(document).on('click','a', function(event){
           
          var user = $(this).text();
          var array = home.filter(function(element){                 
            return element.user === user;
          });
          populate(array);
          event.preventDefault();
        });
        $('input').keypress(function(e){
           var key = e.which;
           if(key == 13){
             var inputText = $('input').val();
             writeTweet(inputText);
             populate(home);
           }
        });
        function populate(home){
          $('.user').remove();
          home.reverse().filter(function(element,index){
           var addClass = (index % 2 == 0) ? 'even' : 'odd';
           userClass = "user"+index;
           var divUserName ="<div class='user userName "+addClass+" "+userClass+"' ><a class='anchor' href='#'>"+element.user+"</a><span class = 'date'>"+timeSince(element["created_at"].getTime())+"</span></div><div class='clearfix'></div>";
           var divTweet ="<div class='user userTweet "+addClass+" user"+index+"'>"+element.message+"</div>";
           $('.bodyContainer').append(divUserName);
            $(".user"+index).append(divTweet);
          });
          
        }
        function timeSince(date) {
         var secondsPassed = Math.floor((new Date() - date) / 1000);
         if(secondsPassed < 1) return "less than a second ago";
         if(secondsPassed === 1) return "1 second ago";
         var interval = Math.floor(secondsPassed / 31536000);
         
         if (interval === 1) return interval + " year ago";
         if (interval > 1) return interval + " years ago";
        
         interval = Math.floor(secondsPassed / 2592000);
         if (interval === 1) return interval + " month ago";
         if (interval > 1) return interval + " months ago";
    
         interval = Math.floor(secondsPassed / 86400);
         if (interval === 1)  return interval + " day ago";
         if (interval > 1)  return interval + " days ago";

         interval = Math.floor(secondsPassed / 3600);
         if (interval === 1) return interval + " hour ago";
         if (interval > 1) return interval + " hours ago";
       
         interval = Math.floor(secondsPassed / 60);
         if (interval === 1) return interval + " minute ago";
         if (interval > 1) return interval + " minutes ago";
    
         return Math.floor(secondsPassed) + " seconds ago";
       }
       
      });

      //for writing out own, first create a new user property named visitor in streams.users.
