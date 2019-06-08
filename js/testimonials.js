function getTestimonials() {
  return [
    {
      id: 1,
      name: "Jerry",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "https://via.placeholder.com/200x200",
    },
    {
      id: 2,
      name: "Zeny",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "https://via.placeholder.com/200x200",
    },
    {
      id: 3,
      name: "Austin",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "https://via.placeholder.com/200x200",
    },
  ];
}

(function printTestimonials() {
  var testes = getTestimonials();
  var holder = document.getElementById("testimonials");
  var inner = "";

  testes.map(function(person) {
    inner +=
      "<div class='teste'><img src='" +
      person.img +
      "'/><h2>" +
      person.name +
      "</h2>" +
      "<p>" +
      person.testimonial +
      "</p></div>";
  });

  holder.innerHTML += inner;
})();
