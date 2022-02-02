import React from "react";
import Card from "./Card.js";
export default function Section() {
  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            <Card
              Free="Free"
              cost="$0"
              month="/Month"
              user="Single Users"
              storage="5GB"
              check="fa fa-check"
              times="fa fa-times"
              times1="fa fa-times"
              muted1="text-muted"
              muted2="text-muted"
            ></Card>
            <Card
              Free="Plus"
              cost="$9"
              month="/Month"
              user="5 Users"
              storage="50GB"
              check="fa fa-check"
              times="fa fa-check"
              times1="fa fa-times"
              muted2="text-muted"
            ></Card>
            <Card
              Free="Plus"
              cost="$49"
              month="/Month"
              user="Unlimited Users"
              storage="500GB"
              check="fa fa-check"
              times="fa fa-check"
              times1="fa fa-check"
            ></Card>
          </div>
        </div>
      </section>
    </>
  );
}
