package lnu.models;

public class book {

	private int id;
	private String title;
	private String author;
	private String genre;
	private String publishDate;
	private String description;

	// constructor
	public book(int id, String title, String author, String genre, String publishDate, String description) {

		this.id = id;
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.publishDate = publishDate;
		this.description = description;
	}

	public void SetId(int id) {
		this.id = id;
	}

	public void SetTitle(String title) {
		this.title = title;
	}

	public void SetAuthor(String author) {
		this.author = author;
	}

	public void SetGenre(String genre) {
		this.genre = genre;
	}

	public void SetPublishDate(String publishDate) {
		this.publishDate = publishDate;
	}

	public void SetDescription(String description) {
		this.description = description;
	}

	public int GetId() {
		return id;
	}

	public String GetTitle() {
		return title;
	}

	public String GetAuthor() {
		return author;
	}

	public String GetGenre() {
		return genre;
	}

	public String GetPublishDate() {
		return publishDate;
	}

	public String GetDescription() {
		return description;
	}

	public String BookInfo() {		
		return "\nReference Number: " + id + "\nTitle: " + title + "\nAuthor: " + author + "\nGenre: " + genre + "\nYear of Publication: " + publishDate + "\nDescription: " + description;
	}
}
