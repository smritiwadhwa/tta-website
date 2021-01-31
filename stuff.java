package helloworld;
import java.util.Scanner;
public class HelloWorld {
	public static void main(String[] args){
		Scanner firstgen = new Scanner(System.in);
		Scanner secondgen = new Scanner(System.in);
		Scanner thirdgen = new Scanner(System.in);
		Scanner firstBald = new Scanner(System.in);
		Scanner secondBald = new Scanner(System.in);
		Scanner thirdBald = new Scanner(System.in);


		//number of people in generations
		double genOne;
		System.out.println("How many maternal uncles do you have?");
	    genOne = firstgen.nextInt();
		double genTwo;
		System.out.println("How many maternal uncles does your mom have?");
	    genTwo = secondgen.nextInt();
		double genThree;
		System.out.println("How many maternal uncles does your grandma have?");
	    genThree = thirdgen.nextInt();





		//number of people bald in that generation
		double oneBald;
		   do {
			   System.out.println("How many of your maternal uncles are bald or have a receding hairline?");
			    oneBald = firstBald.nextInt();
			    if(oneBald>genOne) {
			    System.out.println("You cannot have more bald uncles than uncles you have. Please enter a valid number.");
			    }
		    } while(oneBald>genOne);

		double twoBald;
		 do {
			   System.out.println("How many of your mom's maternal uncles are bald or have a receding hairline?");
			    twoBald = secondBald.nextInt();
			    if(twoBald>genTwo) {
			    System.out.println("Your mom cannot have more bald uncles than uncles she has. Please enter a valid number.");
			    }
		    } while(twoBald>genTwo);
		double threeBald;
		 do {
			   System.out.println("How many of your grandma's maternal uncles are bald or have a receding hairline?");
			    threeBald = thirdBald.nextInt();
			    if(threeBald>genThree) {
			    System.out.println("Your grandma cannot have more bald uncles than uncles she has. Please enter a valid number.");
			    }
		    } while(threeBald>genThree);


	    firstgen.close();
		secondgen.close();
		thirdgen.close();
	    firstBald.close();
		secondBald.close();
		thirdBald.close();


		//percent of people in that generation that are bald
		double perOfGenOne = (oneBald / genOne);
		double perOfGenTwo = (twoBald / genTwo);
		double perOfGenThree = (threeBald / genThree);

		double oneWeight = .5;
		double twoWeight = .35;
		double threeWeight = .15;

		//weights the generations
		double weightedGenOne = perOfGenOne * oneWeight;
		double weightedGenTwo = perOfGenTwo * twoWeight;
		double weightedGenThree = perOfGenThree * threeWeight;

		//adds the percents for a grand total
		double finalPercent = weightedGenOne+weightedGenTwo+weightedGenThree;
		System.out.println("There is a " + (finalPercent*100) + "% chance that you will be bald.");
	}

	}
