app.controller('projectsController', function($scope, $resource, $timeout) {
    $resource('api/projects.json').query(function(res){
        $scope.projects = res;
        $timeout(function() {
            setSizes();
            $('.project-item').hover(function(){
                $(this).children('.project-comment').toggleClass('hidden');
            });
        }, 0, false);
    }, function(err) {
        console.log(err);
    });


    $scope.open = function(index) {
        $scope.photos = $scope.projects[index].photos;
        $scope.files = $scope.projects[index].files;
        $scope.slideIndex = 0;
        if (!$scope.carousel) {
            $scope.carousel = true;
            $('html, body').animate({scrollTop:$("#contact").position().top + 1}, 700);
        } else {
            $('html, body').animate({scrollTop:$("#carousel").position().top + 1}, 700);
        }
    }

    $scope.showImg = function(index) {
        var photos = document.getElementsByClassName("carousel-image");
        if (index < 0) { $scope.slideIndex = photos.length - 1 }
        else if (index >= photos.length) { $scope.slideIndex = 0 }
        else { $scope.slideIndex = index }
        // $('html, body').animate({scrollTop:$("#carousel").position().top}, 700);
    }

    $scope.plusImg = function(n) {
        $scope.showImg($scope.slideIndex + n);
    }

    $scope.close = function() {
        $scope.carousel = false;
        $scope.photos = null;
        $scope.files = null;
        $('html, body').animate({scrollTop:$("#projects").position().top + 1}, 700);
    }
})
