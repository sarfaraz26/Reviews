// reviews array
let reviews = [
    {
        id : 0,
        name : "Sara Jones",
        job : "Front End Developer",
        img : "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quo, totam aliquid excepturi cupiditate perspiciatis vel distinctio quod magnam voluptate."
    },
    {
        id : 1,
        name : "Laila James",
        job : "Back End Developer",
        img : "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo mi, porta eu pellentesque at, euismod in libero. Sed aliquam."
    },
    {
        id : 2,
        name : "Kevin Smith",
        job : "UI/UX Developer",
        img : "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ipsa dolorem iure soluta mollitia ad, quisquam natus tempore rerum porro."
    },
    {
        id : 3,
        name : "Ronnie Jack",
        job : "Full-Stack Developer",
        img : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ipsa dolorem iure soluta mollitia ad, quisquam natus tempore rerum porro."
    }
];

let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let div = document.querySelector('.image');
let name = document.querySelector('h2');
let job = document.querySelector('h5');
let text = document.querySelector('p');
let count = 0;


function showPerson()
{
    initarr = reviews[count];

    name.textContent = initarr.name; 
    job.textContent = initarr.job;
    text.textContent = initarr.text;
    div.style.backgroundImage = `url(${initarr.img})`;
}

function manage(start,end)
{
    if(count==start)
    {
        count = end;
    }
}

nextBtn.addEventListener('click',function()
{
    count++;
    showPerson();

    manage(3,-1);
});

prevBtn.addEventListener('click',function()
{
    manage(0,4);

    count--;
    showPerson();
});

window.onload = showPerson();


