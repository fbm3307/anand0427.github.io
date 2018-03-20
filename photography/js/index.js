var token = '7325658867.77a772f.22532acdd193405c94f3d306d17c21fe',
    container2 = document.getElementById( 'geetha_userinfo' ),
    scrElement2 = document.createElement( 'script' );
 
window.mishaProcessResult2 = function( response ) {
	container2.innerHTML = '<div><p><img src="' + response.data.profile_picture + '"></p></div>'
		+ '<div><h1>' + response.data.username + '</h1>'
	//	+ '<p>#' + response.data.id + '</p>'
		+ '<p>' + response.data.counts.media + ' media ' + response.data.counts.followed_by + ' followers ' + response.data.counts.follows + ' follows</p>'
		+ '<p><strong>' + response.data.full_name + '</strong> ' + response.data.bio + '<a href="' + response.data.website + '">' + response.data.website + '</a></p></div>';
}
 
scrElement2.setAttribute( 'src', 'https://api.instagram.com/v1/users/self?access_token=' + token + '&callback=mishaProcessResult2' );
document.body.appendChild( scrElement2 );
var token = '7325658867.77a772f.22532acdd193405c94f3d306d17c21fe',
    num_photos = 10,
    container = document.getElementById( 'geetha_instafeed' ),
    scrElement = document.createElement( 'script' );
 
window.geProcessResult = function( data ) {
	for( x in data.data ){
		container.innerHTML += '<li><img src="' + data.data[x].images.low_resolution.url + '"></li>';
	}
}
 
scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=geProcessResult' );
document.body.appendChild( scrElement );