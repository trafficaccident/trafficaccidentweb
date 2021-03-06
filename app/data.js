var globals = {
    users: [
        {name: 'jasonabz', picurl: 'https://avatars3.githubusercontent.com/u/507134?v=3&s=72',},
        {name: 'somegirl', picurl: 'https://avatars2.githubusercontent.com/u/10749223?v=3&s=72',},
        {name: 'Melba Toast', picurl: 'http://s3.amazonaws.com/viafoura/user_pictures/8432100000022_10_60x60.jpg',},
        {name: 'Harper 666', picurl: 'https://cdn.viafoura.net/3dd1977/img/defaultavatar.png',},
        {name: 'Brad 76', picurl: 'http://s3.amazonaws.com/viafoura/user_pictures/2615000000230_27_60x60.jpg',},
    ],
    incidents: [
        {   
            type: 'police',
            title: 'Pig\'s head found outside Montreal Police Brotherhood office', 
            news_url:
            'http://www.cbc.ca/news/canada/montreal/cbc-montreal-hackathon-happening-live-1.2994810',
            cover_image:
            'http://i.cbc.ca/1.2993558.1426247414!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/pig-head.JPG',
            coordinates: {
                lat: 45.5276266,
                lng: -73.5856099,
            },
            annotations: [
                {
                    location: null,
                    user: 'Melba Toast',
                    body: 'Can someone articulate what Criminal Code Violation leaving a pigs head on a public street is exactly? Littering?',
                    nested_comments: [],
                },
                {
                    top: 220,
                    left: 200,
                    width: 100,
                    height: 100,
                    editable: false,
                    user: 'Harper 666',
                    body: 'I laughed when i saw the big tough policeman covering the pigs head (no, not the other policeman). Pick it up and put it in the garbage! It won\'t bite you.\nOh ya, right, have to check for fingerprints.',
                    text: 'I laughed when i saw the big tough policeman covering the pigs head (no, not the other policeman). Pick it up and put it in the garbage! It won\'t bite you.\nOh ya, right, have to check for fingerprints.',
                    id: 'I laughed when i saw the big tough policeman covering the pigs head (no, not the other policeman). Pick it up and put it in the garbage! It won\'t bite you.\nOh ya, right, have to check for fingerprints.',
                    nested_comments: [
                        {
                            user: 'Brad 76',
                            body: '@harper 666\n\nC\'mon man, I wouldn\'t want to touch that thing either',
                        }
                    ],
                },
            ],
        },
        {
            type: 'fire',
            title: 'Montreal fire at Papineau and Ontario hampers commute', 
            news_url: 'http://www.cbc.ca/news/canada/montreal/montreal-fire-at-papineau-and-ontario-hampers-commute-1.2895032',
            cover_image: 'http://i.cbc.ca/1.2895059.1420808922!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/papineau-and-ontario.JPG',
            coordinates: {
                lat: 45.5257329,
                lng: -73.5607663,
            },
            annotations: [],
        },
        {
            type: 'fire',
            title: 'McGill University\'s Royal Victoria College building catches fire', 
            news_url: 'http://www.cbc.ca/news/canada/montreal/mcgill-university-s-royal-victoria-college-building-catches-fire-1.2951643',
            cover_image: 'http://i.cbc.ca/1.2951662.1423585697!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/mcgill-university-royal-victoria-college.jpg',
            coordinates: {
                lat: 45.5056072,
                lng: -73.5742968,
            },
            annotations: [],
        },

        {
            type: 'protest',
            title: 'Bill C-51 Day of Action protests', 
            news_url:
            'http://www.cbc.ca/news/politics/bill-c-51-day-of-action-protests-denounce-new-policing-powers-1.2994226',
            cover_image: 'https://pbs.twimg.com/media/CAFE6caW8AALBRn.jpg',
            coordinates: {
                lat: 45.5171283,
                lng: -73.5660947,
            },
            annotations: []
        },
         {
            type: 'other',
            title: 'CBC Montreal Hackathon happening live', 
            news_url:
            'http://www.cbc.ca/news/canada/montreal/cbc-montreal-hackathon-happening-live-1.2994810',
            cover_image:
            'http://i.cbc.ca/1.2995245.1426341946!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/thomas-hackathon.JPG',
            coordinates: {
                lat: 45.516968,
                lng: -73.552913,
            },
            annotations: []
        },
        {
            type: 'bicycle',
            title: 'Cyclist in downtown Montreal crash', 
            news_url:
            'http://www.cbc.ca/news/canada/montreal/cbc-montreal-hackathon-happening-live-1.2994810',
            cover_image:
            'http://i.cbc.ca/1.2637814.1399660699!/fileImage/httpImage/image.jpg_gen/derivatives/original_300/cyclist-injured-montreal.jpg',
            coordinates: {
                lat: 45.509601,
                lng: -73.566427,
            },
            annotations: []
        },
    ],
};
console.log('globals: ', globals);
