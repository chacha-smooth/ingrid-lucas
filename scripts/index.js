// //finde the home-page class and add the 3 divs
// // the center point would be the position fo the profile pic
// //position the 3 elements around the center point
// const about_me = document.getElementsByClassName("about-me");
// const projects = document.getElementsByClassName("projects");
// const blog = document.getElementsByClassName("blog");
// const profile_pic = document.getElementsByClassName("profile-pic")[0];




// const update = ()=>{
//   const rect = profile_pic.getBoundingClientRect();
//   const scale = 1000;
//   const cx = rect.x;
//   const cy = rect.y;
//   console.table({ cx: cx, cy: cy });
//   about_me[0].style.bottom = `${cx-scale}px`;
//   projects[0].style.bottom = `${cx - scale}px`;

// }
// update();
// // Add event listener for window resize
// window.addEventListener("resize", update);

// //length of the sides are equal to each other

//equation would be

// (cx, cy)
// (cos(60)* scale, sin(60)*scale)
//(cos(60)* -scale, sin(60)*scale)
