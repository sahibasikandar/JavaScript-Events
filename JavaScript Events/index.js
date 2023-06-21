function displayFormData(event) {
    event.preventDefault(); 
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;
    let formDataElement = document.getElementById('formData');
    formDataElement.innerHTML = '<p><strong>Name:</strong> ' + name + '</p>' +
                                '<p><strong>Email:</strong> ' + email + '</p>' +
                                '<p><strong>Country:</strong> ' + country + '</p>';
    

    document.getElementById('signupForm').reset();
  }

  function toggleDetails(event) {
    let target = event.target;
    let itemDetails = target.previousElementSibling;
    
    if (itemDetails.style.display === 'none') {
      itemDetails.style.display = 'block';
      target.innerHTML = 'Read less';
    } else {
      itemDetails.style.display = 'none';
      target.innerHTML = 'Read more';
    }
  }
  var studentData = []; // Array to store student details
  var studentTable = document.getElementById('studentData');
  var editForm = document.getElementById('editForm');

  function addStudent(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var studentId = 'student_' + Date.now();
    var student = {
        id: studentId,
        name: name,
        age: age
      };
 studentData.push(student);
 addStudentToTable(student);
 document.getElementById('studentForm').reset();
}
function addStudentToTable(student) {
    var row = document.createElement('tr');
    row.setAttribute('id', student.id);

    var nameCell = document.createElement('td');
    nameCell.textContent = student.name;

    var ageCell = document.createElement('td');
    ageCell.textContent = student.age;

    var actionsCell = document.createElement('td');

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.onclick = function() {
        showEditForm(student);
      };
  
      var deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.setAttribute('class', 'delete-btn');
      deleteBtn.onclick = function() {
        deleteStudent(student.id);
      };
  
      actionsCell.appendChild(editBtn);
      actionsCell.appendChild(deleteBtn);
  
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      row.appendChild(actionsCell);
  
      studentTable.appendChild(row);
    }
    function deleteStudent(studentId) {
        var studentIndex = studentData.findIndex(function(student) {
          return student.id === studentId;
        });
    
        if (studentIndex !== -1) {
            studentData.splice(studentIndex, 1);
            var row = document.getElementById(studentId);
            if (row) {
              row.parentNode.removeChild(row);
            }
          }
        }
        function showEditForm(student) {
            var editNameInput = document.getElementById('editName');
            var editAgeInput = document.getElementById('editAge');
            var editRowIdInput = document.getElementById('editRowId');
            editNameInput.value = student.name;
            editAgeInput.value = student.age;
            editRowIdInput.value = student.id;
            editForm.classList.remove('hidden-form');
        }
      
        function updateStudent(event) {
          event.preventDefault();
          var editName = document.getElementById('editName').value;
          var editAge = document.getElementById('editAge').value;
          var editRowId = document.getElementById('editRowId').value;
          var student = studentData.find(function(student) {
            return student.id === editRowId;
          });
      
          if (student) {
            student.name = editName;
            student.age = editAge;
            var row = document.getElementById(editRowId);
            if (row) {
              var nameCell = row.querySelector('td:nth-child(1)');
              var ageCell = row.querySelector('td:nth-child(2)');
      
              if (nameCell && ageCell) {
                nameCell.textContent = editName;
                ageCell= editName;
                ageCell.textContent = editAge;
              }
            }
            editForm.classList.add('hidden-form');
        }
      }

      function openModal(imageSrc) {
        let modal = document.getElementById('myModal');
        let modalImage = document.getElementById('modalImage');
        
        modal.style.display = 'block';
        modalImage.src = imageSrc;
      }
      
      function closeModal() {
        let modal = document.getElementById('myModal');
        
        modal.style.display = 'none';
      }
    
      let fontSize = 16;
      function zoomIn() {
        fontSize += 10;
        document.getElementById("myParagraph").style.fontSize = fontSize + "px";
      }
    
      function zoomOut() {
        if (fontSize >= 20) {
            fontSize -= 10;
            document.getElementById("myParagraph").style.fontSize = fontSize + "px";
          }
        }



































