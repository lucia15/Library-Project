// Use this file to write and read the xml file.
// http://www.journaldev.com/1234/jaxb-tutorial-example-to-convert-object-to-xml-and-xml-to-object
// javax.xml.bind is added as a part of the sdk from java7 and forward.

// Assigment 2, Task 3: Implementation

package lnu.dao;

import lnu.models.book; 

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
 
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;


public class booksDAO {

	private static final String FILE_NAME = "books.xml";

    	public void method1() {

		    book book1 = new book(1, "Foundation", "Isaac Asimov", "Science fiction", "164", "1951-08-21", "Foundation is the first novel in Isaac Asimovs Foundation Trilogy (later expanded into The Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire.");

			jaxbObjectToXML(book1);

        	book bookFromFile = jaxbXMLToObject();
        	System.out.println(bookFromFile.toString());

    	}

	private static book jaxbXMLToObject() {
	
        	try {
            		JAXBContext context = JAXBContext.newInstance(book.class);
            		Unmarshaller un = context.createUnmarshaller();
            		book book1 = (book) un.unmarshal(new File(FILE_NAME));
			System.out.println(book1.toString());
            		return book1;

        	} catch (JAXBException e) {
            		e.printStackTrace();
        	}	

        	return null;	
	}

    	private static void jaxbObjectToXML(book book1) {
 
        	try {
            		JAXBContext context = JAXBContext.newInstance(book.class);
            		Marshaller m = context.createMarshaller();
            		//for pretty-print XML in JAXB
            		m.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
 
            		// Write to System.out for debugging
            		// m.marshal(book1, System.out);
 
            		// Write to File

            		m.marshal(book1, new File(FILE_NAME));

        	} catch (JAXBException e) {
            		e.printStackTrace();
        	}
    }
}
