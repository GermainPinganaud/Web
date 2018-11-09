let user = {
  //Attribute
  login: $('#login-input').val(),
  password: $('#password-input').val(),
  json: "{}",

  create () {
    $.ajax({
      url: "http://92.222.69.104:80/todo/create/" +
      user.login +
      "/" +
      user.password,
      type: "GET"
    }).done(function(response) {
      this.json = response;
    });
  },
  getLists () {
    $.ajax({
      url: "http://92.222.69.104:80/todo/listes/",
      type: "GET",
      headers: {
        "login":$('#login-input').val(),
        "password":$('#password-input').val()
      }
    }).done(function(response) {

      menu.create(response);
    });
  },
  // modifyList(json) {
  //   $.ajax({
  //     type: 'POST',
  //     headers:
  //     data: JSON.stringify(json),
  //     contentType: "application/json; charset=utf-8",
  //     url: "http://92.222.69.104:80/"
  //   }).done(function(data) {
  //   })
  // }
}


let menu = {
  // Menu is the list of todolists
  addList () {
    // This methods adds a list to the current user
    //// TODO
    alert('not implemented yet');
  },
  createButton(index, name, color) {
    return '<button value="'+
    index+'" type="button" class="select-list btn '+
    color+'">'+
    name+'</button>'
  },
  createTextInput(id="text-input") {
    return '<input type="text" class="form-control id="'+id+'" placeholder="Nouvelle liste">';
  },
  display (html) {
    $('#list-menu').html(html);
  },
  create (data) {
    // Affiche les listes
    let listes = data.todoListes;
    let html = "";
    for (var index in listes) {
      listName = listes[index].name;
      html += this.createButton(index, listName, "btn-primary");
    }
    html += this.createTextInput();
    this.display(html);
    $('.select-list').click(function(){
      listIndex = $(this).attr("value");
      let elements = listes[listIndex].elements
      let html = "<div class='center'><h2>"+
      listes[listIndex].name+
      "</h2></div>";
      // Affiche les elements de liste
      for (var index in elements) {
        element = elements[index];
        html += menu.createButton(index, element);
      }
      $('#data-displayer').html(html);
    });
    $('#new-list-button').click(function(){
      menu.addList();
    });
  }
}

$('#create-user-button').click(function(){
  user.create();
});
$('#get-list-button').click(function(){
  user.getLists();
});
$('#update-list-button').click(function(){
  alert('not implemented yet');
});


// function qui transforme le bouton en text input

// function qui transforme le texte en bouton quand on tape entrée

// supprimer le text input
