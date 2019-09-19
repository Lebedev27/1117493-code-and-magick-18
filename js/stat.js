'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 135;
var CLOUD_Y = 160;
var GAP = 50;
var FONT_GAP = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 50;
var TITLE_HEIGHT = FONT_GAP * 4;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Список результатов:', 120, 56);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px PT Mono';
    ctx.fillText(names[i], CLOUD_X + (GAP + BAR_WIDTH) * i, CLOUD_Y + TITLE_HEIGHT + FONT_GAP);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(CLOUD_X + (GAP + BAR_WIDTH) * i, CLOUD_Y + TITLE_HEIGHT, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }
};
