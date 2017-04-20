"use strict";


$(document)
    .ready(() => {
        let order = [];
        let currentItem = null;
        let chickenPotPie = {
            item_name: "Chicken Pot Pie",
            item_price: 45.00,
            id: 1,
            quantity: null
        }
        let chickenCasserole = {
            item_name: "Chicken Casserole",
            item_price: 25.37,
            id: 2,
            quantity: null
        }
        let doggieBeefStew = {
            item_name: "Doggie Beef Stew",
            item_price: 18.00,
            id: 3,
            quantity: null
        }
        $('.addToCart')
            .click((e) => {
                if (e.target.id === "1") {
                    chickenPotPie.quantity = parseInt($("#dropdown1 option:selected")
                        .text())
                    currentItem = chickenPotPie;
                    order.push(currentItem);
                    console.log(order);
                    localStorage.cart = JSON.stringify(order)
                    console.log(JSON.parse(localStorage.cart));
                } else if (e.target.id === "2") {
                    chickenCasserole.quantity = parseInt($("#dropdown2 option:selected")
                        .text())
                    currentItem = chickenCasserole;
                    order.push(currentItem);
                    console.log(order);
                } else if (e.target.id === "3") {
                    doggieBeefStew.quantity = parseInt($("#dropdown3 option:selected")
                        .text())
                    currentItem = doggieBeefStew;
                    order.push(currentItem);
                    console.log(order);
                }
            });
    });