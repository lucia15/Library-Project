package lnu.models;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "book1")
@XmlType(propOrder = {"id", "title", "author", "genre", "price", "publishDate", "description"})
public class book {

	public int id;
	public String title;
	public String author;
	public String genre;
	public String price; 
	public String publishDate;
	public String description;

	// constructor
	public book(int id, String title, String author, String genre, String price, String publishDate, String description) {

		this.id = id;
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.price = price;
		this.publishDate = publishDate;
		this.description = description;
	}

	@XmlAttribute
	public int GetId() {
		return id;
	}

	public void SetId(int id) {
		this.id = id;
	}

	public String GetTitle() {
		return title;
	}

	public void SetTitle(String title) {
		this.title = title;
	}

	public String GetAuthor() {
		return author;
	}

	public void SetAuthor(String author) {
		this.author = author;
	}

	public String GetGenre() {
		return genre;
	}

	public void SetGenre(String genre) {
		this.genre = genre;
	}

	public String GetPrice() {
		return price;
	}

	public void SetPrice(String genre) {
		this.price = price;
	}

	@XmlElement(name = "publish_date")
	public String GetPublishDate() {
		return publishDate;
	}

	public void SetPublishDate(String publishDate) {
		this.publishDate = publishDate;
	}

	public String GetDescription() {
		return description;
	}

	public void SetDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {		
		return "\nReference Number: " + id + "\nTitle: " + title + "\nAuthor: " + author + "\nGenre: " + genre + "\nPrice: " + price + "\nYear of Publication: " + publishDate + "\nDescription: " + description;
	}
}
