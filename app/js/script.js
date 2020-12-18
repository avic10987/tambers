
///////////////// hamburger menu functionality //////////////////////

const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const dropdown = document.querySelector('.dropdown')

const closeHamburger = () => {
    console.log('burger closedd')
    //unlock scrolling
    document.body.classList.toggle('lock-scroll')

    //change header class
    header.classList.remove('open')
    
    //fade out dropdown
    dropdown.classList.remove('fade-in');
    dropdown.classList.add('fade-out');
}

const openHamburger = () => {
     //lock scrolling
    document.body.classList.toggle('lock-scroll')   

    //change header class
    header.classList.add('open')

    //fade in dropdown
    dropdown.classList.remove('fade-out')
    dropdown.classList.add('fade-in')
}


btnHamburger.addEventListener('click', function(){
    console.log('burger clickedd');

    if(header.classList.contains('open')){
        closeHamburger();
    } else {
        openHamburger();        
    }
})



const dropdownLinks = document.querySelectorAll(".dropdownLink")

dropdownLinks.forEach((link) => { //close hamburger menu when link is clicked
    link.addEventListener('click', () => {
        closeHamburger()
    })

})


///////////////// sticky nav functionality //////////////////////

const headerElem = document.querySelector('header')
const scrollClass = 'header__scrolling-active'

window.addEventListener('scroll', () => {
    if (window.scrollY >10 && !(headerElem.classList.contains(scrollClass))) {
        //console.log('scrolling')
        headerElem.classList.add(scrollClass)
    }
    
    else if (window.scrollY < 10 && (headerElem.classList.contains(scrollClass))) {
        headerElem.classList.remove(scrollClass)
    }

    else {
        return
    }
    
})


////////////////// food menu functionality ///////////////////////

const menuToggles = document.querySelectorAll(".dinein_toggle");
const menuGroups = document.querySelectorAll(".menuGroup");

menuToggles.forEach((button) => {
    button.addEventListener('click', () => {

        const currMenu = document.querySelector('.currentMenu') 
        //remove currmenu from view
        currMenu.classList.add('hidden')
        currMenu.classList.remove('currentMenu')

        //fade out currmenu
        currMenu.classList.remove('fade-in')
        currMenu.classList.add('fade-out')

        //locate menuGroup & make new currmenu
        menuGroups.forEach((menuGroup) => {
        if (menuGroup.id == button.id) {
            menuGroup.classList.remove('hidden')
            menuGroup.classList.add('currentMenu')

            //fade in menuGroup 
            menuGroup.classList.remove('fade-out')
            menuGroup.classList.add('fade-in')
        }
        });
      
    });
  });

  ////////////////// takeout menu functionality ////////////////////

  const menuToggles__takeout = document.querySelectorAll(".takeout_toggle");
  const menuGroups__takeout = document.querySelectorAll(".takeout_group");
  
  console.log(document.querySelector('.current__takeout') )
  menuToggles__takeout.forEach((toggle) => {
      toggle.addEventListener('click', () => {

        
          const currTakeout = document.querySelector('.current__takeout') 

          console.log("curr takeout:", currTakeout)

          //remove currmenu from view
          currTakeout.classList.add('hiddenTakeout')
          currTakeout.classList.remove('current__takeout')
  
          //fade out currmenu
          currTakeout.classList.remove('fade-in')
          currTakeout.classList.add('fade-out')
  

          //locate menuGroup & make new currmenu
          menuGroups__takeout.forEach((takeoutGroup) => {
          if (takeoutGroup.id == toggle.id) {
            takeoutGroup.classList.remove('hiddenTakeout')
            takeoutGroup.classList.add('current__takeout')
  
              //fade in menuGroup 
              takeoutGroup.classList.remove('fade-out')
              takeoutGroup.classList.add('fade-in')
          }
          });
        
      });
    });
  /////////////////////////////////////////////////