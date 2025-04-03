let winter = document.querySelector('.winter')
let spring = document.querySelector('.spring')
let summer = document.querySelector('.summer')
let autumn = document.querySelector('.autumn')

let winter_holidays = document.querySelector('.winter-holidays')
let spring_holidays = document.querySelector('.spring-holidays')
let summer_holidays = document.querySelector('.summer-holidays')
let autumn_holidays = document.querySelector('.autumn-holidays')

winter.addEventListener('click', function(){
    if (winter_holidays.style.display == 'none'){
        winter_holidays.style.display = 'flex';
        spring_holidays.style.display = 'none';
        summer_holidays.style.display = 'none';
        autumn_holidays.style.display = 'none';
    }
    else{
        winter_holidays.style.display = 'none'
    }
})
spring.addEventListener('click', function(){
    if (spring_holidays.style.display == 'none'){
        spring_holidays.style.display = 'flex';
        winter_holidays.style.display = 'none';
        summer_holidays.style.display = 'none';
        autumn_holidays.style.display = 'none';  
    }
    else{
        spring_holidays.style.display = 'none'
    }
})
summer.addEventListener('click', function(){
    if (summer_holidays.style.display == 'none'){
        summer_holidays.style.display = 'flex';
        spring_holidays.style.display = 'none';
        winter_holidays.style.display = 'none';
        autumn_holidays.style.display = 'none';
    }
    else{
        summer_holidays.style.display = 'none'
    }
})
autumn.addEventListener('click', function(){
    if (autumn_holidays.style.display == 'none'){
        autumn_holidays.style.display = 'flex';
        winter_holidays.style.display = 'none';
        summer_holidays.style.display = 'none';
        spring_holidays.style.display = 'none';
    }
    else{
        autumn_holidays.style.display = 'none'
    }
})