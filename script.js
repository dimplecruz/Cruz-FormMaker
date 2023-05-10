const insert = () => {

    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value

    switch(type){
        case 'button': appendButton(label)
            break
        case 'email': appendEmail(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
        case 'phonenumber': appendPhoneNumber(label)
            break
    }

}


const appendButton = (label = "Default") => {
    let elem = document.createElement('button');
    elem.setAttribute('class', 'btn btn-primary form-control mt-2');
    elem.textContent = label;
  
    let remelem = document.createElement('button');
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none');
    remelem.textContent = 'Delete';
    remelem.addEventListener('click', () => {
      container.remove();
    });
  
    let container = document.createElement('div');
    container.setAttribute('class', 'input-group');
    container.append(elem, remelem);
  
    elem.addEventListener('click', () => {
      remelem.classList.toggle('d-none');
    });
  
    document.querySelector('#display').append(container);
  }
  
  const appendEmail = (label = "Default") => {
    let elem = document.createElement("input");
    elem.setAttribute("type", "email");
    elem.setAttribute("placeholder", label);
    elem.setAttribute("class", "form-control mt-2");
  
    let remelem = document.createElement('button');
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none');
    remelem.textContent = 'Delete';
    remelem.addEventListener('click', () => {
      container.remove();
    });
  
    let container = document.createElement('div');
    container.setAttribute('class', 'input-group');
    container.append(elem, remelem);
  
    elem.addEventListener('click', () => {
      remelem.classList.toggle('d-none');
    });
  
    document.querySelector('#display').append(container);
  };


  const appendCheckbox = (label = "Default") => {
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = label.toLowerCase().replace(" ", "-");
    checkbox.name = label.toLowerCase().replace(" ", "-");
    checkbox.value = label;
  
    
    checkbox.style.display = "block";
    checkbox.style.marginBottom = "5px";
  
    let labelElem = document.createElement('label');
    labelElem.htmlFor = checkbox.id;
    labelElem.textContent = label;
  
    let container = document.createElement('div');
    container.setAttribute('class', 'form-element-container');
  
    let removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-outline-dark remove-button');
    removeButton.textContent = 'Delete';
    removeButton.addEventListener('click', () => {
        container.remove();
    });

    container.style.display = "flex";
    container.style.flexDirection = "column";
  
    container.appendChild(checkbox);
    container.appendChild(labelElem);
    container.appendChild(removeButton);

    document.querySelector('#display').appendChild(container);

};

const appendPhoneNumber = (label = "Default") => {
    let elem = document.createElement("input");
    elem.setAttribute("type", "tel");
    elem.setAttribute("placeholder", label);
    elem.setAttribute("class", "form-control mt-2");
  
    let remelem = document.createElement('button');
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none');
    remelem.textContent = 'Delete';
    remelem.addEventListener('click', () => {
      container.remove();
    });
  
    let container = document.createElement('div');
    container.setAttribute('class', 'input-group');
    container.append(elem, remelem);
  
    elem.addEventListener('click', () => {
      remelem.classList.toggle('d-none');
    });

    elem.addEventListener('input', () => {
      let value = elem.value.replace(/\D/g, '');
      value = value.slice(0,3) + '-' + value.slice(3,6) + '-' + value.slice(6,10);
      elem.value = value;
    });
  
    document.querySelector('#display').append(container);
};