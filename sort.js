async function BubbleSort()
{
	for (let j = Rects.length - 1; j > 0; j--)
	{
		for (let i = 0; i < j; i++)
		{
			if (Rects[i].index > Rects[i + 1].index)
			{
				let temp = Rects[i];
				Rects[i] = Rects[i + 1];
				Rects[i + 1] = temp;
				draw();
				await sleep(Speed);
			}
		}
	}
}

async function CocktailSort()
{
	var i = 0, j = Rects.length - 1, s = true, t;
	while (i < j && s)
	{
		s = false;
		for (var k = i; k < j; k++)
		{
			if (Rects[k].index > Rects[k+1].index)
			{
				t = Rects[k]; 
				Rects[k] = Rects[k+1];
				Rects[k+1] = t;
				s = true;
				draw();
				await sleep(Speed);
			}
		}
		j--;
		if (s)
		{
			s = false;
			for (var k = j; k > i; k--)
			if (Rects[k].index < Rects[k-1].index)
			{
				t = Rects[k]; 
				Rects[k] = Rects[k-1]; 
				Rects[k-1] = t; 
				s = true;
				draw();
				await sleep(Speed);
			} 
		}
		i++;
	}
}

async function InsertionSort()
{
	for (var i = 0; i < Rects.length; i++)
	{
		var v = Rects[i], j = i - 1;
		while (j >= 0 && Rects[j].index > v.index)
		{
			Rects[j+1] = Rects[j];
			j--;
		}
		Rects[j+1] = v;
		draw();
		await sleep(Speed);
	}
}

async function GnomeSort()
{
	var i = 1, j = 2;
	while (i < Rects.length)
	{
		if (Rects[i - 1].index < Rects[i].index)
		{
			i = j; 
			j++; 
		}
		else
		{ 
			var t = Rects[i-1]; 
			Rects[i-1] = Rects[ i ]; 
			Rects[ i ] = t;
			i--;
			if (i == 0)
			{
				i = j; 
				j++; 
			}
			draw();
			await sleep(Speed);
		}
	}
}

async function MergeSort()
{
	
}

async function TreeSort()
{
	
}

async function TimSort()
{
	
}

async function SelectionSort()
{
	
}

async function CombSort()
{
	
}

async function ShellSort()
{
	
}

async function HeapSort()
{
	
}

async function SmoothSort()
{
	
}

async function QuickSort()
{
	
}

async function IntroSort()
{
	
}

async function PatienceSorting()
{
	
}

async function StoogeSort()
{
	
}

async function BogoSort()
{
	
}

async function BeadSort()
{
	
}

async function PancakeSorting()
{
	
}

async function PermSort()
{
	
}