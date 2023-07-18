const app = Vue.createApp({
  data() {
    return {
      msg: "Hello Vue",
      x: 0,
      y: 0,
      books: [
        { title: "Maidens", author: "xyz", isFav:true,img:'https://cdn.kobo.com/book-images/6750d058-29cb-4626-9c12-a62e816a80cc/1200/1200/False/harry-potter-and-the-philosopher-s-stone-3.jpg' },
        { title: "Silent Paitent", author: "xyz", isFav:true,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRullsGJRuYP1PkozxT95NOMZ_Md49UNb_HaZLTj9Ts7wVNn6MKj0GkfvM7i2G9ubj71Po&usqp=CAU' },
        { title: "wife between us", author: "efg", isFav:false,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlsB_6hdjVkSYb_zgkjk8zJd1XvOZwQ6hL5aqx_8_U56tA859WUMk05LlTKtT-dtQe-8M&usqp=CAU' },
        { title: "Elon musk", author: "Alex", isFav:false,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZegG5BcmX-q8usaNmAyMeJ-W2LE9RQ4QklS4IjX0nleCsV_z4PON8jKiHvcd-mQv8nM&usqp=CAU' },
        { title: "data5", author: "author5", isFav:true,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZegG5BcmX-q8usaNmAyMeJ-W2LE9RQ4QklS4IjX0nleCsV_z4PON8jKiHvcd-mQv8nM&usqp=CAU' }
      ],
      showBook:true,
    };
  },
  methods: {
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) console.log(data);
    },
    handlemousemove(e) {
      this.x = e.screenX;
      this.y = e.screenY;
      // console.log(x) -> refference error for x,y(any var from data) in apps.js but works on html?
    },
    handleClick(){
        this.showBook = !this.showBook
    },
    toggleFavBook(book){
        book.isFav = !book.isFav
    }
  },
  computed:{
    filterBooks(){
        return this.books.filter(ele=>ele.isFav)
    }
  }
});

app.mount("#root");
