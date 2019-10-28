import 'bootstrap';
import '../scss/main.scss';



import $ from 'jquery';

(function ( $ ) {
    function pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }

    $.fn.showclock = function() {
        
        var currentDate=new Date();
        var fieldDate=$(this).data('date').split('-');
        var futureDate=new Date(fieldDate[0],fieldDate[1]-1,fieldDate[2]);
        var seconds=futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        if(seconds<=0 || isNaN(seconds)){
            this.hide();
            return this;
        }

        var days=Math.floor(seconds/86400);
        seconds=seconds%86400;
        
        var hours=Math.floor(seconds/3600);
        seconds=seconds%3600;

        var minutes=Math.floor(seconds/60);
        seconds=Math.floor(seconds%60);
        
        var html="";

        if(days!=0){
            html+="<div class='countdown-container days'>"
                html+="<span class='countdown-value days-bottom'>"+pad(days)+"</span>";
                html+="<span class='countdown-heading days-top'>Days</span>";
            html+="</div>";
        }

        html+="<div class='countdown-container hours'>"
            html+="<span class='countdown-value hours-bottom'>"+pad(hours)+"</span>";
            html+="<span class='countdown-heading hours-top'>Hours</span>";
        html+="</div>";

        html+="<div class='countdown-container minutes'>"
            html+="<span class='countdown-value minutes-bottom'>"+pad(minutes)+"</span>";
            html+="<span class='countdown-heading minutes-top'>Minutes</span>";
        html+="</div>";

        html+="<div class='countdown-container seconds'>"            
            html+="<span class='countdown-value seconds-bottom'>"+pad(seconds)+"</span>";
            html+="<span class='countdown-heading seconds-top'>Seconds</span>";
        html+="</div>";

        this.html(html);
    };

    $.fn.countdown = function() {
        var el=$(this);
        el.showclock();
        setInterval(function(){
            el.showclock(); 
        },1000);
        
    }

}(jQuery));

$(document).ready(function(){
    if($(".countdown").length>0)
        $(".countdown").countdown();

});

const loadGoogleMapsApi = require('load-google-maps-api');
 
var options = {
	key: 'AIzaSyDhBiQ6tU3cSikkas5vgpSnpo5IcZ2sAtU'
}

loadGoogleMapsApi(options).then(function (googleMaps) {
  new googleMaps.Map(document.querySelector('.map'), {
    
    

    center: {
      lat: 40.7484405,
      lng: -73.9944191

    },
    zoom: 12,

    styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]

	    

   
  })
}).catch(function (error) {
  console.error(error)
})

