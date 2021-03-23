/**
 * ATAYEN
 *
 * @category    Front end
 * @package     Main js
 * @copyright   Copyright (c) 2021 Atayaen. (http://www.Atayen.us)
 * @author      BENMESSAOUD ADAM (adambenmessaoud2@gmail.com)
 */


var $ = jQuery.noConflict();



$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:3
            }
        }
    });
    $('.nonloop').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });
  });