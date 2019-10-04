import { Component } from "@angular/core";

@Component({
  selector: "app-start",
  templateUrl: "app.component.html"
})
export class AppComponent {
  title = "Welcome Aditya";
  MegaCities = ["Mumbai", "Pune", "Kolkata", "Bnagelore"];
  // mobPart = {
  //   id: 101,
  //   name: "screen",
  //   Price: 2000
  // };
  mobParts = [
    {
      name: "Sony",
      id: 11,
      inStock: 10,
      color: "red",
      isOnline: true,
      country: "India"
    },
    {
      name: "MOTO",
      id: 103,
      inStock: 0,
      color: "green",
      isOnline: false,
      country: "Australia"
    }
  ];
}
