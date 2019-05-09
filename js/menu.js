function getMenuItems() {
  return [
    {
      category: "hot-dogs",
      title: "Hot Dogs",
      description:
        "All of hot dogs come with a delicious Nathans Famous Sausage Link, served on a perfectly toasted bun. See some of our most popular items below, or customise your order at Rio Brazillian BBQ! ",
      items: [
        {
          id: "brazillian-dog",
          title: "Brazillian Dog",
          description:
            "Topped with Homemade Mayo, Vinagerette, Parmesan Cheese and Crunchy Shoestring Potatoes.",
          price: "$7",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "american-dog",
          title: "American Dog",
          description:
            "Topped with Homemade Mayo, Hawaian Style  Chilli and topped with Shredded Cheddar Cheese.",
          price: "$7",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "chili-dog",
          title: "Chili Dog",
          description:
            "Topped with Homemade Mayo, Hawaian Style  Chilli and topped with Shredded Cheddar Cheese.",
          price: "$7",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "kemoo-dog",
          title: "Kemoo Dog",
          description:
            "Topped with our delicious Homemade Mayo, Vinaigrette and Crunchy Bacon bits",
          price: "$7",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "mexican-dog",
          title: "Mexican Dog",
          description:
            "Comes with our Homemade Chipotle Sour Cream, Pico de Gallo Salsa and Jalapenos.",
          price: "$7",
          img: "https://via.placeholder.com/300x200",
        },
      ],
    },
    {
      category: "pulled-sandwiches",
      title: "Pulled Sandwiches",
      description:
        "Try our variety of slow cooked meats on our unique toasted French Baguette with our Signature House Mayo, and customize your Pulled Sandwich with our tasty addons!",
      items: [
        {
          id: "pulled-chicken",
          title: "Pulled Chicken",
          description:
            "Tender slow cooked pulled chicken seasonsed with our specialty house blend!",
          price: "$9",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "pulled-pork",
          title: "Pulled Pork",
          description:
            "Slow cooked to perfection, our Big Island Kalua Pulled Pork Sandwich will hit the spot!",
          price: "$9",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "pulled-steak",
          title: "Pulled Sirloin Steak",
          description:
            "Enjoy our Premium Quality Pulled Sirloin Steak, slow cooked to tender perfection.",
          price: "$9",
          img: "https://via.placeholder.com/300x200",
        },
      ],
      addons: {
        title: "Top Off Your Pulled Sandwich with our Delicious Addons!",
        items: [
          {
            id: "havarti",
            name: "Havarti Cheese",
            price: "$1.00",
          },
          {
            id: "arugala",
            name: "Baby Arugala",
            price: "$0.75",
          },
          {
            id: "vinagerette",
            name: "Vinagerette",
            description: "Minced onion, tomato and green pepper",
            price: "$0.50",
          },
          {
            id: "bbq-sauce",
            name: "BBQ Sauce",
            price: "$0.50",
          },
        ],
      },
    },
    {
      category: "kabobs",
      title: "Kabobs (Skewers)",
      description:
        "Enjoy our fire roasted skewers, with plenty of options to choose from. A delicious snack or on the go, or with a drink in the other hand!",
      items: [
        {
          id: "steak-skewer",
          title: "Steak",
          description: "",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "garlic-steak-skewer",
          title: "Garlic Steak",
          description: "",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "chicken-herb-skewer",
          title: "Chicken and Herb",
          description: "",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "beer-chicken-skewer",
          title: "Beer Chicken",
          description: "",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "pork-herb-skewer",
          title: "Pork and Herb",
          description: "",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "brazilian-sausage-skewer",
          title: "Brazilian Sausage",
          description: "",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "portugese-sausage-skewer",
          title: "Portugese Sausage",
          description: "",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "spam-skewer",
          title: "Spam",
          description: "",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "shrimp-skewer",
          title: "Shirmp",
          description: "",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "vegan-skewer",
          title: "Vegan",
          description:
            "Onions, Cherry Tomato, Green Pepper, Zucchini and Mushrooms",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "chixo-skewer",
          title: "Chixo",
          description: "Delicious mix of Steak, Onion, Tomato and Green Pepper",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
      ],
      addons: {
        title: "Need some Sauce for that?",
        items: [
          {
            id: "chipolte",
            name: "Chipolte",
            price: "$0.75",
          },
          {
            id: "jack-daniels-bbq",
            name: "Jack Daniels BBQ",
            price: "$0.75",
          },
          {
            id: "vinagerette",
            name: "Vinagerette",
            description: "Minced onion, tomato and green pepper",
            price: "$0.75",
          },
          {
            id: "sriracha",
            name: "Srirachi Chili",
            price: "$0.75",
          },
          {
            id: "korean-bbq",
            name: "Korean BBQ",
            price: "$0.75",
          },
        ],
      },
    },
    {
      category: "plate-lunch",
      title: "Plate Lunch",
      description:
        "Pick your choice of white or brown rice, mac salad or mixed greens and top it off with your choice of Chicken, Beef or Steak!",
      select: [
        {
          type: "carb",
          title: "Start off with your choice of White or Brown Rice",
          items: [
            {
              id: "brown-rice",
              title: "Brown Rice",
              img: "https://via.placeholder.com/300x200",
            },
            {
              id: "white-rice",
              title: "White Rice",
              img: "https://via.placeholder.com/300x200",
            },
          ],
        },
        {
          type: "health",
          title: "Add some flavor with our Tasty Mixed Green or Macaroni Salad",
          items: [
            {
              id: "mac-salad",
              title: "Macaroni Salad",
              img: "https://via.placeholder.com/300x200",
            },
            {
              id: "mixed-greens",
              title: "Mixed Greens",
              img: "https://via.placeholder.com/300x200",
            },
          ],
        },
        {
          type: "health",
          title:
            "Top it off with your choice of our premium Chicken, Steak or Pork (6oz)",
          items: [
            {
              id: "chicken",
              title: "Chicken",
              img: "https://via.placeholder.com/300x200",
            },
            {
              id: "steak",
              title: "Steak",
              img: "https://via.placeholder.com/300x200",
            },
            {
              id: "pork",
              title: "Pork",
              img: "https://via.placeholder.com/300x200",
            },
          ],
        },
      ],
    },
    {
      category: "sandwiches",
      title: "Sandwiches",
      description:
        "Try one of our delicious sandwiches on our Signature Toasted Baguette. All are topped with Homemade Garlic Mayonaise, Monteray Jack Cheese, Baby Arugala, Alfalfa Sprouts, Cherry Tomato, Carrot, Cucumber and Olive Oil.",
      items: [
        {
          id: "chicken",
          title: "Roasted Chicken",
          description: "",
          price: "$9",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "turkey-avocado",
          title: "Turkey and Avocado",
          description: "",
          price: "$9",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "tuna",
          title: "Tuna Melt",
          description: "",
          price: "$9",
          img: "https://via.placeholder.com/300x200",
        },
      ],
      addons: {
        title: "Top Your Sandwich with Quality Addons",
        items: [
          {
            id: "avocado",
            name: "Avocado",
            price: "$1.00",
          },
        ],
      },
    },
    {
      category: "burgers",
      title: "Burgers",
      description:
        "Try our Deliciuos 5oz grilled Burgers on our Signature French Bread Buns!",
      items: [
        {
          id: "plain",
          title: "Hamburger",
          description: "Try our Hamburger, topped with our Homemade Mayonaise",
          price: "$7.50",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "cheese-burger",
          title: "Cheeseburger",
          description: "Topped with Havarti Cheese and our Homemade Mayonaise",
          price: "$9",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "bacon-burger",
          title: "Bacon Burger",
          description:
            "Havarti Cheese, Homemade Mayonaise, Lettuce, Tomato and BACON!",
          price: "$9",
          img: "https://via.placeholder.com/300x200",
        },
      ],
      addons: {
        title: "Add Extras to Your Burger!",
        items: [
          {
            id: "bacon",
            name: "Bacon",
            price: "$1.00",
          },
          {
            id: "avocado",
            name: "Avocado",
            price: "$1.00",
          },
        ],
      },
    },
    {
      category: "sandwiches",
      title: "Drink Menu",
      description:
        "Don't forget to grab a drink with your delicious menu item!",
      items: [
        {
          id: "soda",
          title: "Bottled Soda",
          description: "Coca-Cola, Diet Coke, Sprite, Ginger Ale",
          price: "$2",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "tea",
          title: "Large Tea",
          description: "Sweet or Unsweetend Green Tea",
          price: "$2",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "water",
          title: "Bottled Water",
          description: "Hawaiian Purified Water",
          price: "$1.50",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "coconut-water",
          title: "Cocout Water",
          description: "ENTER BRAND OF COCONUT WATER",
          price: "$3",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "aloha-maid",
          title: "Aloha Maid Variety",
          description: "Lilikoi, Passion Orange and more",
          price: "$1.50",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "energy-drink",
          title: "Energy Drinks",
          description: "Red Bull and Monster Varieties",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
        {
          id: "hawaiian-ginger-ale",
          title: "Hawaiian Ginger Lemonade",
          description: "Organic Hawaiian Ginger Lemonade from the Big Island",
          price: "$5",
          img: "https://via.placeholder.com/300x200",
        },
      ],
    },
  ];
}

function renderMenuItems() {
  var categories = getMenuItems();
  var container = document.getElementById("categories");

  categories.map(function(category) {
    var menuItems = "";
    var addonsContainer = "";
    var customPlateContainer = "";

    if (category.category === "plate-lunch") {
      category.select.map(function(step) {
        var choices = "";
        step.items.map(function(choice) {
          choices +=
            "<div class='menu-item'>" +
            "<img src='" +
            choice.img +
            "' />" +
            "<h6>" +
            choice.title +
            "</h6></div>";
        });

        customPlateContainer +=
          "<h5>" +
          step.title +
          "</h5>" +
          "<div class='menu-items'>" +
          choices +
          "</div>";
      });
    } else {
      category.items.map(function(item) {
        menuItems +=
          "<div class='menu-item'>" +
          "<span class='price-tag'>" +
          item.price +
          "</span>" +
          "<img src='" +
          item.img +
          "' />" +
          "<h6>" +
          item.title +
          "</h6>" +
          "<p>" +
          item.description +
          "</p>" +
          "</div>";
      });
    }

    if (category.addons) {
      var addons = "";
      category.addons.items.map(function(addon) {
        var desc = addon.description
          ? "<p><small>" + addon.description + "</small></p>"
          : "";
        addons += "<li>" + addon.name + " - " + addon.price + desc + "</li>";
      });
      addonsContainer +=
        "<div class='addons-container'><h3>" +
        category.addons.title +
        "</h3><ul class='addons'>" +
        addons +
        "</ul></div>";
    }

    var menuContainer = "<div class='menu-items'>" + menuItems + "</div>";

    container.innerHTML +=
      "<div class='category'>" +
      "<h3>" +
      category.title +
      "</h3>" +
      "<h4>" +
      category.description +
      "</h4>" +
      "<div class='separator dark fat short'></div>" +
      menuContainer +
      customPlateContainer +
      addonsContainer +
      "</div>";
  });
}

renderMenuItems();
