package lnu.resources;

import lnu.dao.booksDAO;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/books")
@Produces(MediaType.APPLICATION_JSON)
public class RemoveBookResource {

	// Assigment 2, Task 3: Implement Delete books

/*	@Path("/{bookid}")
	@DELETE
	public void removeBook(@PathParam("bookid") String id) {
		booksDAO bd = new booksDAO();
		bd.Delete(id);
	} */
}
