'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

let player1 = true

$(() => {
  setAPIOrigin(location, config)

$('#1').on('click', function () {
if (player1 === true) {
  $('#1').text('X')
}else{
  $('#1').text('O')
}
player1=!player1
})

$('#2').on('click', function () {
  if (player1 === true) {
$('#2').text('X')
}else{
  $('#2').text('O')
}
player1=!player1
})

$('#3').on('click', function () {
  if (player1 === true) {
$('#3').text('X')
}else{
  $('#3').text('O')
}
player1=!player1
})

$('#4').on('click', function () {
  if (player1 === true) {
$('#4').text('X')
}else{
  $('#4').text('O')
}
player1=!player1
})

$('#5').on('click', function () {
  if (player1 === true) {
$('#5').text('X')
}else{
  $('#5').text('O')
}
player1=!player1
})

$('#6').on('click', function () {
  if (player1 === true) {
$('#6').text('X')
}else{
  $('#6').text('O')
}
player1=!player1
})

$('#7').on('click', function () {
  if (player1 === true) {
$('#7').text('X')
}else{
  $('#7').text('O')
}
player1=!player1
})

$('#8').on('click', function () {
  if (player1 === true) {
$('#8').text('X')
}else{
  $('#8').text('O')
}
player1=!player1
})

$('#9').on('click', function () {
  if (player1 === true) {
$('#9').text('X')
}else{
  $('#9').text('O')
}
player1=!player1
})
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
