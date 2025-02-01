let buy = document.querySelectorAll(".buy");
let chart = document.querySelector(".chart");
let conta = document.querySelector(".container")
buy.forEach(function (e) {
    let num = 1;
    e.onclick = function () {
        if (document.querySelector(".chart img") && document.querySelector(".chart .p")) {
            document.querySelector(".chart img").remove()
            document.querySelector(".chart .p").remove()
        }
        chart.style.height = "fit-content";
        let the = e.parentElement.parentElement.dataset.kind;
        let p = document.querySelector(`[data-kind="${the}"] .info .forma`);
        let inner = document.createElement("div")
        inner.innerHTML = `<div class="the ${the}"> <div class="kind" data-kind="${the}">${p.innerHTML}</div><div class="total">${num}x <span class="first">${document.querySelector(`[data-kind="${the}"] .info .price`).innerHTML}</span> <span class="last">${parseInt(+document.querySelector(`[data-kind="${the}"] .info .price`).innerHTML) * num}<img src="images/icon-remove-item.svg" alt=""></div>`;
        document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML + 1
        e.parentElement.classList.add("my")
        document.querySelector(".chart .number").after(inner)
        e.innerHTML = `<img src="images/icon-increment-quantity.svg" class="add" alt=""><span>${num}</span><img src="images/icon-decrement-quantity.svg" class="remove" alt="">`
        e.className = "added";
        if (!document.querySelector(".thetotal")) {
            let total = document.createElement("div");
            total.className = "thetotal"
            total.innerHTML = `<p>total</p><p>${parseInt(+document.querySelector(`[data-kind="${the}"] .info .price`).innerHTML) * num}<p>`;
            chart.append(total)
        } else {
            let total = document.querySelector(".thetotal");
            total.innerHTML = `<p>total</p><p>${+(total.children[1].innerHTML) + parseInt(+document.querySelector(`[data-kind="${the}"] .info .price`).innerHTML) * num}<p>`;
        }
        if (!document.querySelector(".del")) {
            let del = document.createElement("div");
            del.className = "del";
            del.innerHTML = `<img src="images/icon-carbon-neutral.svg" alt="image"><p>this is <span>carbon-neutral</span> delivery</p>`;
            document.querySelector(".thetotal").after(del);
        }
        if (!document.querySelector(".con")) {
            let con = document.createElement("div");
            con.innerHTML = "Confrim Order";
            con.className = "con"
            document.querySelector(".del").after(con);
            document.querySelector(".con").onclick = function () {
                conta.style.pointerEvents = "none";
                conta.style.opacity = ".5";
                let finsih = document.createElement("div");
                finsih.className = "finish";
                finsih.innerHTML = `<img src="images/icon-order-confirmed.svg" alt="image"><p>order confirmed <span>we hope you enjoy you food</span></p>`;
                let conta1 = document.createElement("div");
                conta1.className = "conta1"
                document.querySelectorAll(".the").forEach(function (e) {
                    document.querySelector(`.${e.classList[1]} .last img`).remove()
                    let img = document.querySelector(`[data-kind="${e.classList[1]}"] .dessert img`).cloneNode()
                    e.prepend(img)
                    conta1.append(e)
                })
                let over = document.querySelector("p");
                over.innerHTML = `over total <span>${document.querySelector(".chart .thetotal p:nth-child(2)").innerHTML}</span>`;
                conta1.append(over)
                finsih.append(conta1)
                let button = document.createElement("button");
                button.innerHTML = "start new order";
                button.onclick = function () {
                    location.reload()
                }
                finsih.append(button)
                document.body.appendChild(finsih)
            }
        }
        document.querySelectorAll(`.the .total .last img`).forEach(function (n) {
            n.onclick = function () {
                num = 1;
                document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML - +document.querySelector(`[data-kind="${n.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added span`).innerHTML
                n.parentElement.parentElement.parentElement.remove();
                document.querySelector(`.${n.parentElement.parentElement.parentElement.classList[1]} .total`)
                document.querySelector(`[data-kind="${n.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).innerHTML = `<img src="images/icon-add-to-cart.svg" alt="image">Add to Cart</div>`;
                let total = document.querySelector(".thetotal");
                total.innerHTML = `<p>total</p><p>${+(total.children[1].innerHTML) + parseInt(+document.querySelector(`[data-kind="${the}"] .info .price`).innerHTML) * num}<p>`;
                document.querySelector(`[data-kind="${n.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).className = "buy";
            }
        })
        end(e);
    }
})
function end(n) {
    let num = 1;
    n.onclick = function () {
        let kind = n.parentElement.parentElement.dataset.kind;
        if (!document.querySelector(`[data-kind=${kind}] .dessert .added .add`)) {
            n.innerHTML = `<img src="images/icon-increment-quantity.svg" class="add" alt=""><span>1</span><img src="images/icon-decrement-quantity.svg" class="remove" alt="">`
            n.className = "added";
        }
        if (!document.querySelector(`.${kind}`)) {
            chart.style.height = "fit-content";
            let kind = n.parentElement.parentElement.dataset.kind;
            let p = document.querySelector(`[data-kind="${kind}"] .info .forma`);
            let inner = document.createElement("div")
            inner.innerHTML = `<div class="the ${kind}"> <div class="kind" data-kind="${kind}">${p.innerHTML}</div><div class="total">${num}x <span class="first">${document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML}</span> <span class="last">${parseInt(+document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML)}<img src="images/icon-remove-item.svg" alt=""></div>`;
            document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML + 1
            n.parentElement.classList.add("my")
            chart.append(inner)
            n.innerHTML = `<img src="images/icon-increment-quantity.svg" class="add" alt=""><span>${num}</span><img src="images/icon-decrement-quantity.svg" class="remove" alt="">`
        }
        let p = document.querySelector(`[data-kind="${kind}"] .info .forma`)
        let remove = document.querySelector(`[data-kind=${kind}] .dessert .added .remove`);
        let plus = document.querySelector(`[data-kind=${kind}] .dessert .added .add`);
        plus.onclick = function () {
            num++
            document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML + 1
            let total = document.querySelector(".thetotal");
            total.innerHTML = `<p>total</p><p>${+(total.children[1].innerHTML) + (parseInt(+document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML))}<p>`;
            document.querySelector(`.${kind}`).innerHTML = `<div class="kind" data-kind="${kind}">${p.innerHTML}</div><div class="total">${num}x <span class="first">${document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML}</span> <span class="last">${parseInt(+document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML) * num}<img src="images/icon-remove-item.svg" alt="">`
            n.innerHTML = `<img src="images/icon-increment-quantity.svg" class="add" alt=""><span>${num}</span><img src="images/icon-decrement-quantity.svg" class="remove" alt="">`;
            document.querySelectorAll(`.the .total .last img`).forEach(function (e) {
                e.onclick = function () {
                    num = 1;
                    e.parentElement.parentElement.parentElement.remove();
                    document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML - +document.querySelector(`[data-kind="${e.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added span`).innerHTML
                    let total = document.querySelector(".thetotal");
                    total.innerHTML = `<p>total</p><p>${+(total.children[1].innerHTML) + parseInt(+document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML)}<p>`;
                    document.querySelector(`.${e.parentElement.parentElement.parentElement.classList[1]} .total`)
                    document.querySelector(`[data-kind="${e.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).innerHTML = `<img src="images/icon-add-to-cart.svg" alt="image">Add to Cart</div>`;
                    document.querySelector(`[data-kind="${e.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).className = "buy";
                    end(n)
                }
            })
        }
        remove.onclick = function () {
            num = num - 1;
            if (num > 0) {
                n.innerHTML = `<img src="images/icon-increment-quantity.svg" class="add" alt=""><span>${num}</span><img src="images/icon-decrement-quantity.svg" class="remove" alt="">`;
                document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML - 1
                let total = document.querySelector(".thetotal");
                total.innerHTML = `<p>total</p><p>${+(total.children[1].innerHTML) - parseInt(+document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML)}<p>`;
                document.querySelector(`.${kind}`).innerHTML = `<div class="kind" data-kind="${kind}">${p.innerHTML}</div><div class="total">${num}x <span class="first">${document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML}</span> <span class="last">${parseInt(+document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML) * num}<img src="images/icon-remove-item.svg" alt="">`
                document.querySelectorAll(`.the .total .last img`).forEach(function (e) {
                    e.onclick = function () {
                        num = 1;
                        document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML - +document.querySelector(`[data-kind="${e.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added span`).innerHTML
                        e.parentElement.parentElement.parentElement.remove();
                        let total = document.querySelector(".thetotal");
                        total.innerHTML = `<p>total</p><p>${+(total.children[1].innerHTML) - parseInt(+document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML)}<p>`;
                        document.querySelector(`.${e.parentElement.parentElement.parentElement.classList[1]} .total`)
                        document.querySelector(`[data-kind="${e.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).innerHTML = `<img src="images/icon-add-to-cart.svg" alt="image">Add to Cart</div>`;
                        document.querySelector(`[data-kind="${e.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).className = "buy";
                    }
                })
            } else if (num === 0) {
                document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML - 1
                let total = document.querySelector(".thetotal");
                total.innerHTML = `<p>total</p><p>${+(total.children[1].innerHTML) - parseInt(+document.querySelector(`[data-kind="${kind}"] .info .price`).innerHTML)}<p>`;
                if (document.querySelector(".chart .number span").innerHTML === "0") {
                    chart.innerHTML = `<p class="number">Your Cart is (<span>0</span>)</p>
            <img src="images/illustration-empty-cart.svg" alt="">
            <div class="p">Your added items will appear here</div>`
                }
                document.querySelectorAll(`.${kind}`).forEach(function (e) {
                    e.remove()
                })
                n.innerHTML = `<img src="images/icon-add-to-cart.svg" alt="image">Add to Cart</div>`;
                n.className = "buy";
                n.parentElement.classList.remove("my");
                n.onclick = function () {
                    let num = 1;
                    document.querySelectorAll(`[data-kind=${kind}] .dessert .buy`).forEach(function (e) {
                        e.onclick = function () {
                            if (document.querySelector(".chart img") && document.querySelector(".chart .p")) {
                                document.querySelector(".chart img").remove()
                                document.querySelector(".chart .p").remove()
                            }
                            chart.style.height = "fit-content";
                            let the = e.parentElement.parentElement.dataset.kind;
                            let p = document.querySelector(`[data-kind="${the}"] .info .forma`);
                            let inner = document.createElement("div")
                            inner.innerHTML = `<div class="the ${the}"> <div class="kind" data-kind="${the}">${p.innerHTML}</div><div class="total">${num}x <span class="first">${document.querySelector(`[data-kind="${the}"] .info .price`).innerHTML}</span> <span class="last">${parseInt(+document.querySelector(`[data-kind="${the}"] .info .price`).innerHTML) * num}<img src="images/icon-remove-item.svg" alt=""></div>`;
                            document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML + 1
                            e.parentElement.classList.add("my")
                            document.querySelector(".chart .number").after(inner)
                            e.innerHTML = `<img src="images/icon-increment-quantity.svg" class="add" alt=""><span>${num}</span><img src="images/icon-decrement-quantity.svg" class="remove" alt="">`
                            e.className = "added";
                            if (!document.querySelector(".thetotal")) {
                                let total = document.createElement("div");
                                total.className = "thetotal"
                                total.innerHTML = `<p>total</p><p>${parseInt(+document.querySelector(`[data-kind="${the}"] .info .price`).innerHTML) * num}<p>`;
                                chart.append(total)
                            } else {
                                let total = document.querySelector(".thetotal");
                                total.innerHTML = `<p>total</p><p>${+(total.children[1].innerHTML) + parseInt(+document.querySelector(`[data-kind="${the}"] .info .price`).innerHTML) * num}<p>`;
                            }
                            if (!document.querySelector(".del")) {
                                let del = document.createElement("div");
                                del.className = "del";
                                del.innerHTML = `<img src="images/icon-carbon-neutral.svg" alt="image"><p>this is <span>carbon-neutral</span> delivery</p>`;
                                document.querySelector(".thetotal").after(del);
                            }
                            if (!document.querySelector(".con")) {
                                let con = document.createElement("div");
                                con.innerHTML = "Confrim Order";
                                con.className = "con"
                                document.querySelector(".del").after(con);
                                document.querySelector(".con").onclick = function () {
                                    document.body.style.pointerEvents = "none";
                                    document.body.style.opacity = ".5";
                                    let finsih = document.createElement("div");
                                    finsih.className = "finish";
                                    finsih.innerHTML = `<img src="images/icon-order-confirmed.svg" alt="image"><p>order confirmed <span>we hope you enjoy you food</span></p>`;
                                    let conta1 = document.createElement("div");
                                    conta1.className = "conta1"
                                    document.querySelectorAll(".the").forEach(function (e) {
                                        document.querySelector(`.${e.classList[1]} .last img`).remove()
                                        let img = document.querySelector(`[data-kind="${e.classList[1]}"] .dessert img`).cloneNode()
                                        e.prepend(img)
                                        conta1.append(e)
                                    })
                                    let over = document.querySelector("p");
                                    over.innerHTML = `over total is <span>${document.querySelector(".chart .thetotal p:nth-child(2)").innerHTML}</span>`;
                                    conta1.append(over)
                                    finsih.append(conta1)
                                    let button = document.createElement("button");
                                    button.innerHTML = "start new order";
                                    button.onclick = function () {
                                        location.reload()
                                    }
                                    finsih.append(button)
                                    document.body.appendChild(finsih)
                                }
                            }
                            document.querySelectorAll(`.the .total .last img`).forEach(function (n) {
                                n.onclick = function () {
                                    num = 1;
                                    document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML - +document.querySelector(`[data-kind="${n.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added span`).innerHTML
                                    n.parentElement.parentElement.parentElement.remove();
                                    document.querySelector(`.${n.parentElement.parentElement.parentElement.classList[1]} .total`)
                                    document.querySelector(`[data-kind="${n.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).innerHTML = `<img src="images/icon-add-to-cart.svg" alt="image">Add to Cart</div>`;
                                    document.querySelector(`[data-kind="${n.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).className = "buy";
                                }
                            })
                            end(e);
                        }
                    })
                }
            }
        }
        document.querySelectorAll(`.the .total .last img`).forEach(function (e) {
            e.onclick = function () {
                num = 1;
                document.querySelector(".chart .number span").innerHTML = +document.querySelector(".chart .number span").innerHTML - +document.querySelector(`[data-kind="${e.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added span`).innerHTML
                let total = document.querySelector(".thetotal");
                total.innerHTML = `<p>total</p><p>${document.querySelector(".chart .number span").innerHTML}<p>`;
                document.querySelector(`.${e.parentElement.parentElement.parentElement.classList[1]} .total`)
                e.parentElement.parentElement.parentElement.remove();
                document.querySelector(`.${e.parentElement.parentElement.parentElement.classList[1]} .total`)
                document.querySelector(`[data-kind="${e.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).innerHTML = `<img src="images/icon-add-to-cart.svg" alt="image">Add to Cart</div>`;
                document.querySelector(`[data-kind="${e.parentElement.parentElement.parentElement.classList[1]}"] .dessert .added`).className = "buy";
            }
        })
    }
}