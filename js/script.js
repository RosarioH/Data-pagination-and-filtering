/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page){
   // Two variables which will represent the index for the first and last student on the page
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   // select the element with a class of `student-list` and assign it to a variable
   const studentList = document.querySelector('.student-list');
   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = '';

   // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++) {
      // Conditional to display the proper students
      if (i >= startIndex && i < endIndex) {
            // Elements needed to display the student information
            const studentTemplate = `
                  <li class="student-item cf">
                     <div class="student-details">
                        <img class="avatar" src="${data[i].picture.medium}" alt="Profile Picture">
                        <h3>${data[i].name.title + '. ' + data[i].name.first + ' ' + data[i].name.last}</h3>
                        <span class="email">${data[i].email}</span>
                     </div>
                     <div class="joined-details">
                        <span class="date">Joined ${data[i].registered.date}</span>
                     </div>
                  </li> `;
            // insert the above elements
            studentList.insertAdjacentHTML('beforeend', studentTemplate);
      }
   }
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   // Variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length / 9);

   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   // loop over the number of pages needed
   for(let i = 1; i <= numOfPages; i++){
      // Elements needed to display the pagination button
      const button = `<li> <button type="button"> ${i} </button> </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }
      document.querySelector('button:first-child').className = 'active';
      linkList.addEventListener('click', (e) => {
         if(e.target.tagName === 'BUTTON'){
            // remove the "active" class from the previous button
            document.querySelector('.active').className = '';
            // add the active class to the clicked button
            e.target.className = 'active';
            // call the showPage function passing the `list` parameter and page to display as arguments
            showPage(list, e.target.textContent);
         }
            
      })
};

// Call functions
showPage(data, 1);
addPagination(data);
