package lnu.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import lnu.models.book;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import org.codehaus.jackson.map.SerializationConfig.Feature;

// Response will be JSON
@Produces(MediaType.APPLICATION_JSON)

// This is the class that will be called when "localhost:9090/api/books" get called by the browser.
// FOR THE CURIOUS: Take a look in the config.yml to find out why "/api" is present in the path.
@Path("/books")
public class GetBooksResource {

	@GET
	public String getBooks() {

		book book1 = new book(1, "1984", "George Orwell", "Science fiction", "1949-06-08", "In George Orwell's 1984, Winston Smith wrestles with oppression in Oceania, a place where the Party scrutinizes human actions with ever-watchful Big Brother. Defying a ban on individuality, Winston dares to express his thoughts in a diary and pursues a relationship with Julia. These criminal deeds bring Winston into the eye of the opposition, who then must reform the nonconformist. George Orwell's 1984 introduced the watchwords for life without freedom: BIG BROTHER IS WATCHING YOU.");

		book book2 = new book(2, "Brave New World", "Aldous Huxley", "Science fiction" ,"1932", "Set in London of AD 2540 (632 A.F. 'After Ford' in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that combine profoundly to change society.");

		book book3 = new book(3, "The Metamorphosis", "Franz Kafka", "Philosophical novella", "1915", "The story begins with a traveling salesman, Gregor Samsa, waking to find himself transformed (metamorphosed) into a large, monstrous insect-like creature. The cause of Gregor's transformation is never revealed, and Kafka himself never gave an explanation. The rest of Kafka's novella deals with Gregor's attempts to adjust to his new condition as he deals with being burdensome to his parents and sister, who are repelled by the horrible, verminous creature Gregor has become.");

		book book4 = new book(4, "Animal Farm", "George Orwell", "Satirical fable", "1945-08-17", "Mr Jones of Manor Farm is so lazy and drunken that one day he forgets to feed his livestock. The ensuing rebellion under the leadership of the pigs Napoleon and Snowball leads to the animals taking over the farm. Vowing to eliminate the terrible inequities of the farmyard, the renamed Animal Farm is organised to benefit all who walk on four legs. But as time passes, the ideals of the rebellion are corrupted, then forgotten. And something new and unexpected emerges...Animal Farm - the history of a revolution that went wrong - is George Orwell's brilliant satire on the corrupting influence of power.");

		book book5 = new book(5, "The House of the Spirits", "Isabel Allende", "Magic realism", "1982", "The story details the life of the Trueba family, spanning four generations, and tracing the post-colonial social and political upheavals of Chile – though the country's name, and the names of figures closely paralleling historical ones, such as 'the President' or 'the Poet', are never explicitly given. The story is told mainly from the perspective of two protagonists Esteban and Alba.");

		// SubTask A: This print the books in the page, I commented it in order to do next Tasks
		// s = book1.BookInfo() + "\n" + book2.BookInfo() + "\n" + book3.BookInfo() + "\n" + book4.BookInfo() + "\n" + book5.BookInfo(); 
		// System.out.println(s);		

		// SubTask B:

		ObjectMapper mapper = new ObjectMapper();

		mapper.disable(Feature.FAIL_ON_EMPTY_BEANS);
		
		String s = "";	

		try {		
			//Convert object to JSON string and pretty print

			String jsonInString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(book1);
			System.out.println(jsonInString);	
			s += jsonInString + "\n\n";	

			jsonInString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(book2);
			System.out.println(jsonInString);
			s += jsonInString + "\n\n";	

			jsonInString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(book3);
			System.out.println(jsonInString);
			s += jsonInString + "\n\n";	

			jsonInString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(book4);
			System.out.println(jsonInString);
			s += jsonInString + "\n\n";

			jsonInString = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(book5);
			System.out.println(jsonInString);
			s += jsonInString + "\n\n";
		
		} catch (JsonGenerationException e) {
			e.printStackTrace();

		} catch (JsonMappingException e) {
			e.printStackTrace();

		} catch (IOException e) {
			e.printStackTrace();
		}

		// SubTask C:

		return s;
	}

}