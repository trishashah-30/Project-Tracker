function addProject() 
{
  var input = document.getElementById("projectInput");
  var projectName = input.value.trim();

  if (projectName === "") {
    return;
  }

  var li = document.createElement("li");
  li.textContent = projectName;

  // Click once to mark as done
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Right-click to delete
  li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    li.remove();
  });

  document.getElementById("projectList").appendChild(li);
  input.value = "";
}
