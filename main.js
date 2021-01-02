let Rects = new Array();
let Speed = 50;

function randColor() 
{
	var r = Math.floor(Math.random() * (256)),
		g = Math.floor(Math.random() * (256)),
		b = Math.floor(Math.random() * (256));
	return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function sleep(ms) 
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

function draw()
{
	var canvas = document.getElementById("cnv");
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < 50; i++) 
	{
		context.fillStyle = Rects[i].color;
		context.fillRect(i * 10, 500, 10, Rects[i].index * -10); 
	}
}

function load() 
{
	for (var i = 0; i < 50; i++) 
		Rects[i] = new Rect(randColor(), i + 1);
	Rects.sort(() => Math.random() - 0.5);
	draw();
	ChangeSort();
}

async function shuffle()
{
	for (let i = Rects.length - 1; i > 0; i--)
	{
		let j = Math.floor(Math.random() * (i + 1));
		[Rects[i], Rects[j]] = [Rects[j], Rects[i]];
		draw();
		await sleep(Speed);
	}
}

function start()
{
	var index = document.getElementById("Changesort").options.selectedIndex;
	var funcName = document.getElementById("Changesort").options[index].value;

	if (new Function('return typeof ' + funcName)() !== 'undefined')
		window[funcName]();
}

function ChangeSort()
{
	var index = document.getElementById("Changesort").options.selectedIndex;
	var sort = document.getElementById("Changesort").options[index].value;

	katex.render(BestCase.get(sort), document.getElementById("BestCaseFormula"));
	katex.render(AverageCase.get(sort), document.getElementById("AverageCaseFormula"));
	katex.render(WorstCase.get(sort), document.getElementById("WorstCaseFormula"));
	document.getElementById("description").innerHTML = Description.get(sort);
}

function ChangeSpeed()
{
	var index = document.getElementById("Changespeed").options.selectedIndex;
	var speed = document.getElementById("Changespeed").options[index].value;
	switch(speed)
	{
		case "Slow":
			Speed = 100;
			break;
		case "Normal":
			Speed = 50;
			break;
		case "Fast":
			Speed = 25;
			break;
		default:
			Speed = 100;
			break;
	}
}