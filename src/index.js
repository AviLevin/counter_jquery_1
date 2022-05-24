import $ from "jquery";
import "./styles.css";

$(document).ready(() => {
  // alert("document is ready");
  let counter = $("#counter");
  $(document).on("click", "#plus", () => {
    // $("#plus").click(() => {
    let value = Number(counter.text());
    let newValue = value + 1;
    counter.text(newValue);
  });

  $("#minus").click(() => {
    let value = Number(counter.text());
    let newValue = value - 1;
    counter.text(newValue);
    console.log("is", value);
    // alert("clicked");
  });
});
