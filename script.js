function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase and use indexOf
  return s1.toLowerCase().indexOf(s2.toLowerCase());
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
