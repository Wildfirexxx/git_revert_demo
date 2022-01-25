// Initial Commit
var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

 ```js
  // Autocomplete widget
  $(function () {
    var skillNames = [
      'Bootstrap',
      'C',
      'C++',
      'CSS',
      'Express.js',
      'Git',
      'HTML',
      'Java',
      'JavaScript',
      'jQuery',
      'JSON',
      'MySQL',
      'Node.js',
      'NoSQL',
      'PHP',
      'Python',
      'React',
      'Ruby',
    ];
    $('#skill-name').autocomplete({
      source: skillNames,
    });
  });
  ```

* In your terminal, add and commit the changes:

  ```bash
  git add -A
  git commit -m 'added Autocomplete widget'
  ```

* Repeat for the `Datepicker` widget:

  ```js
  // Datepicker widget
  $(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });

formEl.on('submit', handleFormSubmit);
