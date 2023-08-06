let button = document.getElementById('test-button');

let question1 = document.getElementsByName('question-1');
let question2 = document.getElementsByName('question-2');
let question3 = document.getElementsByName('question-3');
let question4 = document.getElementsByName('question-4');
let question5 = document.getElementsByName('question-5');
let question6 = document.getElementsByName('question-6');
let question7 = document.getElementsByName('question-7');
let question8 = document.getElementsByName('question-8');
let question9 = document.getElementsByName('question-9');
let question10 = document.getElementsByName('question-10');

let field1 = document.getElementById('field-1');
let field2 = document.getElementById('field-2');
let field3 = document.getElementById('field-3');
let field4 = document.getElementById('field-4');
let field5 = document.getElementById('field-5');
let field6 = document.getElementById('field-6');
let field7 = document.getElementById('field-7');
let field8 = document.getElementById('field-8');
let field9 = document.getElementById('field-9');
let field10 = document.getElementById('field-10');

let message_1 = document.getElementById('bad-answer-description-1');
let message_2 = document.getElementById('bad-answer-description-2');
let message_3 = document.getElementById('bad-answer-description-3');
let message_4 = document.getElementById('bad-answer-description-4');
let message_5 = document.getElementById('bad-answer-description-5');
let message_6 = document.getElementById('bad-answer-description-6');
let message_7 = document.getElementById('bad-answer-description-7');
let message_8 = document.getElementById('bad-answer-description-8');
let message_9 = document.getElementById('bad-answer-description-9');
let message_10 = document.getElementById('bad-answer-description-10');

let bad_answer_message = document.query;

let green_color = '#95ff87';
let red_color = '#ff7369';

function getAnswers() {
  // Otázka 1
  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      // co se stane, když zadá "pravda"
      if (question1[i].value === 'true') {
        // barva pozadí
        field1.style.backgroundColor = red_color;
        field1.style.border = 'none';
        message_1.style.display = 'block';
      }
      // co se stane, když zadá "nepravda"
      else {
        field1.style.backgroundColor = green_color;
        field1.style.border = 'none';
      }
    }
  }

  // Otázka 2
  for (let i = 0; i < question2.length; i++) {
    if (question2[i].checked) {
      // co se stane, když zadá "pravda"
      if (question2[i].value === 'true') {
        // barva pozadí
        field2.style.backgroundColor = red_color;
        field2.style.border = 'none';
        message_2.style.display = 'block';
      }
      // co se stane, když zadá "nepravda"
      else {
        field2.style.backgroundColor = green_color;
        field2.style.border = 'none';
      }
    }
  }

  // Otázka 3
  for (let i = 0; i < question3.length; i++) {
    if (question3[i].checked) {
      // co se stane, když zadá "pravda"
      if (question3[i].value === 'true') {
        // barva pozadí
        field3.style.backgroundColor = red_color;
        field3.style.border = 'none';
        message_3.style.display = 'block';
      }
      // co se stane, když zadá "nepravda"
      else {
        field3.style.backgroundColor = green_color;
        field3.style.border = 'none';
      }
    }
  }

  // Otázka 4
  for (let i = 0; i < question4.length; i++) {
    if (question4[i].checked) {
      // co se stane, když zadá "pravda"
      if (question4[i].value === 'true') {
        // barva pozadí
        field4.style.backgroundColor = red_color;
        field4.style.border = 'none';
        message_4.style.display = 'block';
      }
      // co se stane, když zadá "nepravda"
      else {
        field4.style.backgroundColor = green_color;
        field4.style.border = 'none';
      }
    }
  }

  // Otázka 5
  for (let i = 0; i < question5.length; i++) {
    if (question5[i].checked) {
      // co se stane, když zadá "pravda"
      if (question5[i].value === 'true') {
        // barva pozadí
        field5.style.backgroundColor = red_color;
        field5.style.border = 'none';
        message_5.style.display = 'block';
      }
      // co se stane, když zadá "nepravda"
      else {
        field5.style.backgroundColor = green_color;
        field5.style.border = 'none';
      }
    }
  }

  // Otázka 6
  for (let i = 0; i < question6.length; i++) {
    if (question6[i].checked) {
      // co se stane, když zadá "pravda"
      if (question6[i].value === 'true') {
        // barva pozadí
        field6.style.backgroundColor = red_color;
        field6.style.border = 'none';
      }
      // co se stane, když zadá "nepravda"
      else {
        field6.style.backgroundColor = green_color;
        field6.style.border = 'none';
      }
    }
  }

  // Otázka 7
  for (let i = 0; i < question7.length; i++) {
    if (question7[i].checked) {
      // co se stane, když zadá "pravda"
      if (question7[i].value === 'true') {
        // barva pozadí
        field7.style.backgroundColor = red_color;
        field7.style.border = 'none';
      }
      // co se stane, když zadá "nepravda"
      else {
        field7.style.backgroundColor = green_color;
        field7.style.border = 'none';
      }
    }
  }

  // Otázka 8
  for (let i = 0; i < question8.length; i++) {
    if (question8[i].checked) {
      // co se stane, když zadá "pravda"
      if (question8[i].value === 'true') {
        // barva pozadí
        field8.style.backgroundColor = red_color;
        field8.style.border = 'none';
      }
      // co se stane, když zadá "nepravda"
      else {
        field8.style.backgroundColor = green_color;
        field8.style.border = 'none';
      }
    }
  }

  // Otázka 9
  for (let i = 0; i < question9.length; i++) {
    if (question9[i].checked) {
      // co se stane, když zadá "pravda"
      if (question9[i].value === 'true') {
        // barva pozadí
        field9.style.backgroundColor = red_color;
        field9.style.border = 'none';
      }
      // co se stane, když zadá "nepravda"
      else {
        field9.style.backgroundColor = green_color;
        field9.style.border = 'none';
      }
    }
  }

  // Otázka 10
  for (let i = 0; i < question10.length; i++) {
    if (question10[i].checked) {
      // co se stane, když zadá "pravda"
      if (question10[i].value === 'true') {
        // barva pozadí
        field10.style.backgroundColor = red_color;
        field10.style.border = 'none';
      }
      // co se stane, když zadá "nepravda"
      else {
        field10.style.backgroundColor = green_color;
        field10.style.border = 'none';
      }
    }
  }
}

button.onclick = getAnswers;
