// // 1. Написать программу, которая будет имитировать счет в банке, сначала пользователю предлагается внести сумму на депозит(сумма должна быть положительной), затем необходимо спросить у пользователя, хочет ли он пойти за покупками, если нет, вывести сообщение типа: До встречи! Если он выберет вариант покупок, тогда необходимо запросить информацию о том, какой продукт он хочет купить и сколько он стоит(макс 3 продукта), продукты сохранить в отдельный объект в формате(название продукта: цена), также необходимо отнять стоимость продуктов от счета в банке, необходимо проверить достаточно ли средств, если средств недостаточно вывести ошибку. В конце работы программа должна распечатать объект с покупками и оставшуюся сумму на счете
// // НАЧАЛО
// let money = +prompt('Внести сумму в депозит ')
// if (money < 150 && money >= 0) {
// 	alert('Необходимо для покупки пополнить больше 150')
// 	money = +prompt('Внести сумму в депозит ')
// }
// let bankAccount = money
// if (money >= 150) {
// 	let store = confirm('Хотите ли вы пойти за покупками')
// 	if (store == true) {
// 		let product = +prompt('Выберите цифру что хотите купить.1)Butter-20')
// 		let productS = product
// 		productS = {
// 			butter: 20,
// 			milk: 80,
// 			water: 50,
// 		}
// 		//butter
// 		if (product == 1) {
// 			if (bankAccount >= +productS.butter) {
// 				let remainder = bankAccount - productS.butter
// 				alert(`Butter успешно куплен ваш баланс ${remainder}`)
// 				let list = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 				// if (list == 1) {product= prompt('Выберите цифру что хотите купить.2)Milk-150,3)Water-150')}
// 				switch (list) {
// 					//доработать case 2 listUse2
// 					case 1:
// 						let listProduct = +prompt('Выберите цифру что хотите купить.2)Milk-80,3)Water-50')
// 						//Milk
// 						if (listProduct == 2) {
// 							if (bankAccount >= +productS.milk) {
// 								let remainderProduct2 = remainder - productS.milk
// 								alert(`Milk успешно куплен ваш баланс ${remainderProduct2}`)
// 								let listUse2 = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 								//1)Вернуться к покупкам
// 								switch (listUse2) {
// 									case 1:
// 										let listProductWater = +prompt('Выберите цифру что хотите купить.3)Water-50')
// 										if (listProductWater == 3) {
// 											if (bankAccount >= +productS.water) {
// 												let remainderWaterUse2 = remainderProduct2 - productS.water
// 												alert(`Water успешно куплен ${remainderWaterUse2}`)
// 												alert('Спасибо вам за покупки и до скорых встреч!')
// 											}
// 										} else {
// 											alert(`К сожалению ничем не смогу помочь ваш баланс${productS.water}`)
// 										}
// 										break
// 									//2)Проверить остаток баланса
// 									case 2:
// 										alert(`Ваш баланс составляет ${remainderProduct2}`)
// 										break
// 									default:
// 										alert(`К сожалению ничем не смогу помочь`)
// 								}
// 							} else {
// 								alert(`К сожалению ничем не смогу помочь до скорых встреч`)
// 							}
// 						}
// 						//Water
// 						else if (listProduct == 3) {
// 							if (bankAccount >= +productS.water) {
// 								remainderProduct3 = remainder - productS.water
// 								alert(`Water успешно куплен ваш баланс ${remainderProduct3}`)
// 								let listUse3 = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 								switch (listUse3) {
// 									case 1:
// 										let listProduct2Milk = +prompt('Выберите цифру что хотите купить.2)Milk')
// 										if (listProductMilk == 2) {
// 											if (bankAccount >= +productS.milk) {
// 												remainderMilk = remainderProduct3 - productS.milk
// 												alert(`Water успешно куплен ваш баланс ${remainderMilk}`)
// 												alert(`Итого: Вы купили Butter,Milk,Water; Было потрачено 150 было внесено ${money}`)
// 											}
// 										} else {
// 											alert('Неверный вариант ответа пожалуйста вернитесь назад')
// 										}
// 										break
// 									case 2:
// 										alert(`Ваш баланс составляет ${remainderProduct3}`)
// 										break
// 									default:
// 										alert('К сожалению нет такого варианта ответа')
// 								}
// 							} else {
// 								alert('Не хватает средств')
// 							}
// 						} else {
// 							alert('Неверный вариант ответа пожалуйста вернитесь назад')
// 						}
// 						break
// 					case 2:
// 						alert(`Ваш баланс составляет ${remainder}`)
// 						let list_store = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам')
// 						let listProductCase_2 = +prompt('Выберите цифру что хотите купить.2)Milk-80,3)Water-50')
// 						if (listProductCase_2 == 2) {
// 							if (bankAccount >= +productS.milk) {
// 								remainderMilk = remainder - productS.milk
// 								alert(`Milk успешно куплен ваш баланс ${remainderMilk}`)
// 								let listCase_2 = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 								switch (listCase_2) {
// 									case 1:
// 										let listProductListUse_2 = +prompt('Выберите цифру что хотите купить.3)Water-50')
// 										if (listProductListUse_2 == 3) {
// 											if (bankAccount >= +productS.water) {
// 												remainderWater = remainderMilk - productS.water
// 												alert(`Water успешно куплен ваш баланс ${remainderWater}`)
// 											} else {
// 												alert('К сожалению нет такого варианта ответа')
// 											}
// 										}
// 										break
// 									case 2:
// 										// alert(`Ваш баланс составляет ${remainderMilk}`)
// 										break
// 									default:
// 										alert('К сожалению нет такого варианта ответа')
// 								}
// 							}
// 						} else if (listProduct == 3) {
// 							if (bankAccount >= +productS.water) {
// 								remainder = bankAccount - productS.water
// 								alert(`Water успешно куплен ваш баланс ${remainder}`)
// 								let listUse3 = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 								switch (listUse3) {
// 									case 1:
// 										let listProductWater = +prompt('Выберите цифру что хотите купить.3)Water-50')
// 										if (listProductWater == 3) {
// 											if (bankAccount >= +productS.water) {
// 												remainderWater = remainderMilk - productS.water
// 												alert(`Water успешно куплен ваш баланс ${remainderWater}`)
// 											}
// 										}
// 								}
// 							} else {
// 								alert('Не хватает средств')
// 							}
// 						} else {
// 							alert('Неверный вариант ответа пожалуйста вернитесь назад')
// 						}
// 						break
// 					default:
// 				}
// 				switch (list) {
// 					case 2:
// 						alert(`Ваш баланс составляет ${remainder}`)
// 						listRemainder = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам')
// 				}
// 			} else if (bankAccount >= +productS.butter) {
// 				alert('Не хватает средств')
// 			}
// 		}
// 		// else if (product == 2) {
// 		// 	if (bankAccount >= productS.milk) {
// 		// 		remainder = bankAccount - productS.milk
// 		// 		alert(`Milk успешно куплен ваш баланс ${remainder}`)
// 		// 		let list = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 		// 		// if (list == 1) {product= prompt('Выберите цифру что хотите купить.2)Milk-150,3)Water-150')}
// 		// 		switch (list) {
// 		// 			//доработать case 2 listUse2
// 		// 			case 1:
// 		// 				let listProduct = +prompt('Выберите цифру что хотите купить.1) Butter,3)Water-50')
// 		// 				//Butter
// 		// 				if (listProduct == 1) {
// 		// 					if (bankAccount >= +productS.butter) {
// 		// 						remainderButter = remainder - productS.butter
// 		// 						alert(`Butter успешно куплен ваш баланс ${remainderButter}`)
// 		// 						let listProduct2 = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 		// 						//1)Вернуться к покупкам
// 		// 						switch (listProduct2) {
// 		// 							case 1:
// 		// 								let listProduct2Water = +prompt('Выберите цифру что хотите купить.3)Water-50')
// 		// 								if (listProduct2Water == 3) {
// 		// 									if (bankAccount >= +productS.water) {
// 		// 										let remainderListProduct2Water = remainderButter - productS.water
// 		// 										alert(`Water успешно куплен ${remainderListProduct2Water}`)
// 		// 										alert('Спасибо вам за покупки и до скорых встреч!')
// 		// 									}
// 		// 								} else {
// 		// 									alert(`К сожалению ничем не смогу помочь ваш баланс${productS.water}`)
// 		// 								}
// 		// 								break
// 		// 							//2)Проверить остаток баланса
// 		// 							case 2:
// 		// 								alert(`Ваш баланс составляет ${remainderButter}`)
// 		// 								break
// 		// 							default:
// 		// 								alert(`К сожалению ничем не смогу помочь`)
// 		// 						}
// 		// 					} else {
// 		// 						alert(`К сожалению ничем не смогу помочь до скорых встреч`)
// 		// 					}
// 		// 				}
// 		// 				//Water
// 		// 				else if (listProduct == 3) {
// 		// 					if (bankAccount >= +productS.water) {
// 		// 						let remainderProduct2ListProduct3 = remainder - productS.water
// 		// 						alert(`Water успешно куплен ваш баланс ${remainderProduct2ListProduct3}`)
// 		// 						let remainderProduct2ListProduct3Use3 = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 		// 						switch (remainderProduct2ListProduct3Use3) {
// 		// 							case 1:
// 		// 								let listProduct3Butter = +prompt('Выберите цифру что хотите купить.1)Butter')
// 		// 								if (listProduct3Butter == 1) {
// 		// 									if (bankAccount >= +productS.buter) {
// 		// 										remainderMilk = remainderProduct2ListProduct3 - productS.milk
// 		// 										alert(`Water успешно куплен ваш баланс ${remainderMilk}`)
// 		// 										alert(`Итого: Вы купили Butter,Milk,Water; Было потрачено 150 было внесено ${money}`)
// 		// 									}
// 		// 								} else {
// 		// 									alert('Неверный вариант ответа пожалуйста вернитесь назад')
// 		// 								}
// 		// 								break
// 		// 							case 2:
// 		// 								alert(`Ваш баланс составляет ${remainderProduct2ListProduct3}`)
// 		// 								break
// 		// 							default:
// 		// 								alert('К сожалению нет такого варианта ответа')
// 		// 						}
// 		// 					} else {
// 		// 						alert('Не хватает средств')
// 		// 					}
// 		// 				} else {
// 		// 					alert('Неверный вариант ответа пожалуйста вернитесь назад')
// 		// 				}
// 		// 				break
// 		// 			case 2:
// 		// 				alert(`Ваш баланс составляет ${remainder}`)
// 		// 				let list_store = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам')
// 		// 				let listProductCase_2 = +prompt('Выберите цифру что хотите купить.2)Milk-80,3)Water-50')
// 		// 				if (listProductCase_2 == 2) {
// 		// 					if (bankAccount >= +productS.milk) {
// 		// 						remainderMilk = remainder - productS.milk
// 		// 						alert(`Milk успешно куплен ваш баланс ${remainderMilk}`)
// 		// 						let listCase_2 = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 		// 						switch (listCase_2) {
// 		// 							case 1:
// 		// 								let listProductListUse_2 = +prompt('Выберите цифру что хотите купить.3)Water-50')
// 		// 								if (listProductListUse_2 == 3) {
// 		// 									if (bankAccount >= +productS.water) {
// 		// 										remainderWater = remainderMilk - productS.water
// 		// 										alert(`Water успешно куплен ваш баланс ${remainderWater}`)
// 		// 									} else {
// 		// 										alert('К сожалению нет такого варианта ответа')
// 		// 									}
// 		// 								}
// 		// 								break
// 		// 							case 2:
// 		// 								// alert(`Ваш баланс составляет ${remainderMilk}`)
// 		// 								break
// 		// 							default:
// 		// 								alert('К сожалению нет такого варианта ответа')
// 		// 						}
// 		// 					}
// 		// 				} else if (listProduct == 3) {
// 		// 					if (bankAccount >= +productS.water) {
// 		// 						remainder = bankAccount - productS.water
// 		// 						alert(`Water успешно куплен ваш баланс ${remainder}`)
// 		// 						let listUse3 = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам,2)Проверить остаток баланса')
// 		// 						switch (listUse3) {
// 		// 							case 1:
// 		// 								let listProductWater = +prompt('Выберите цифру что хотите купить.3)Water-50')
// 		// 								if (listProductWater == 3) {
// 		// 									if (bankAccount >= +productS.water) {
// 		// 										remainderWater = remainderMilk - productS.water
// 		// 										alert(`Water успешно куплен ваш баланс ${remainderWater}`)
// 		// 									}
// 		// 								}
// 		// 						}
// 		// 					} else {
// 		// 						alert('Не хватает средств')
// 		// 					}
// 		// 				} else {
// 		// 					alert('Неверный вариант ответа пожалуйста вернитесь назад')
// 		// 				}
// 		// 				break
// 		// 			default:
// 		// 		}
// 		// 		switch (list) {
// 		// 			case 2:
// 		// 				alert(`Ваш баланс составляет ${remainder}`)
// 		// 				listRemainder = +prompt('Выберите цифру для совершения действия.1)Вернуться к покупкам')
// 		// 		}
// 		// 	} else if (bankAccount >= +productS.butter) {
// 		// 		alert('Не хватает средств')
// 		// 	}
// 		// }
// 		// Water
// 	} else if (product == 3) {
// 	} else {
// 		alert('К сожалению нет такого варианта ответа')
// 	}
// } else if (money < 150) {
// 	alert('Для покупки необходимо пополнить баланс на 150,обновите страницу')
// } else {
// 	alert('Ошибка введите сумму и обновите страницу')
// }
// //Конец
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// // 2. Реализовать калькулятор(+, -, *, /), запросить у пользователя 2 числа и операцию, которую нужно произвести, обработать вариант того, что на ноль делить нельзя
// let num = +prompt();
// let num1 = +prompt();
// let oper = prompt();

// switch(oper){
//     case '+':
//         console.log(num+num1);
//         break;
//     case '-':
//         console.log(num-num1);
//         break;
//     case '*':
//         console.log(num*num1);
//         break;
//     case '/':
//         if (num ==0 || num1 == 0){
//             alert('На ноль делить нельзя')
//         } else {
//             console.log(num/num1);
//         }
//         break;
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// // 3. Запросить у пользователя имя, возраст, профессию, хобби, сохранить данные в объект, распечатать результат, данные необходимо заросить одним промптом

// let data = prompt('Введите ваше имя, возраст, профессию, хобби');
// let obj = data.split(' ');

// let obj2 = {};

// obj2.name = obj[0];
// obj2.age = obj[1];
// obj2.profession = obj[2];
// obj2.hobby = obj[3];

// // let obj2 = {
// // name: 'Zhibek',
// // };
// // obj2.name = 'Vlad';
// // obj2.age = '25'

// console.log(obj2);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// // 4. Запросить у пользователя информацию для регистрации(логин, пароль, подтверждение пароля), проверить пароли на совпадение, если не совпадают вывести сообщение типа: Пароли не совпадают; также длинна пароля должна быть не менее 6ти символов и не может состоять из пробелов, сохранить данные в объект(подтверждение пароля не нужно сохранять), также по умолчанию добавить объекту ключ isAuth: false; после регистрации предложить пользователю авторизацию на сайте, если согласен, то запросить у него логин и пароль, сверить их с данными из объекта, если все совпадает, то необходимо поменять значение ключа isAuth на true;

// let username = prompt('enter your login');
// const pass = prompt('enter your password');
// let passCon = prompt('confirm your password');

// let obj;

// if (pass === passCon && pass.trim().length >=6 && pass.trim()){
//      obj = {username, pass, isAuth: false }
// } else {
//     alert('Ошибка')
// }
// let auth = confirm();
// if (auth){
//     let login2 = prompt();
//     let pass2 = prompt();
//     if (pass2 === obj.pass && login2 == obj.username){
//         obj.isAuth = true;
//     console.log(obj);
//     } else {
//         alert('Данные не совпадают')
//     }
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5. Дан объект:
// {
//     username: 'Tom',
//     age: 35,
//     work: 'IT',
//     pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//     }
// }, запросить у пользователя информацию о том, какой ключ он хочет изменить и значение на которое нужно менять данные под этим ключом, учесть, что есть вложенный объект

// let obj = {
//         username: 'Tom',
//         age: 35,                                   // obj.key == obj[‘key’]
//         work: 'IT',
//         pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//         }
//     }
// let auth = prompt();
// switch(auth){
//     case 'username':
//         let username = prompt();
//         obj.username = us;
//         break;
//     case 'age':
//         let age = prompt();
//         obj.age = age;
//         break;
//     case 'work':
//         let work = prompt();
//         obj.work = work;
//         break;
//     case 'type':
//         let type = prompt();
//         obj.pet.type = type;
//         break;
//     case 'name':
//         let namepet = prompt();
//         obj.pet.type = namepet;
//         break;
//     case 'color':
//         let color = prompt();
//         obj.pet.color = color;
//         break;
//     case `pet age`:
//         let age2 = prompt();
//         obj.pet.age = age2;
//     }
//     console.log(obj);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// 6. Дан объект с продуктами:
// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
// }, запросить у пользователя одним промптом какие продукты он хочет приобрести, затем вывести сообщение с конечной суммой заказа

// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
//     }

//     let order = prompt('Введите названия продуктов, которые вы хотите приобрести, через запятую:');
//     let orderArr = order.split(',');

//     let total = 0;

//     if (products.hasOwnProperty(orderArr[0])) {
//     total += products[orderArr[0]];
//     }
//     if (products.hasOwnProperty(orderArr[1])) {
//     total += products[orderArr[1]];
//     }
//     if (products.hasOwnProperty(orderArr[2])) {
//     total += products[orderArr[2]];
//     }
//     if (products.hasOwnProperty(orderArr[3])) {
//     total += products[orderArr[3]];
//     }
//     if (products.hasOwnProperty(orderArr[4])) {
//     total += products[orderArr[4]];
//     }
//     if (products.hasOwnProperty(orderArr[5])) {
//     total += products[orderArr[5]];
//     }

//     console.log(`Сумма заказа составит ${total}`);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// 7. Запросить у пользователя 3 числа одним промптом, сохранить все числа в разные переменные, затем вывести их разность

// let num = +prompt('').split('');
// let result = num[0];
// let result1 = num[1];
// let result2 = num[2];
// console.log((+result)-(+result1)-(+result2));
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// // 8. Запросить у пользователя 2 числа, и вывести их произведение, если одно из чисел 0, то вывести сообщение типа: При умножении на 0, любое число будет 0

// let num = prompt('1');
// let num2 = prompt('1');
// if (num ==0 || num2 ==0){
//     alert('При умножении на ноль 0 любое число будет 0')
// } else {
//     alert((+num)*(+num2))
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
