
// super class
class Youtube {
    private numberOfchannels:number=40000;
    private TotalVideos:string="5 million";                   //properties of youtube channel
    private numberofAccounts:string="2 million";
    constructor(public maxVideosize:string,public maxRuntime:string){
        this.maxVideosize=maxVideosize;
        this.maxRuntime=maxRuntime;


    }
}

// child class of youtube
class Tseries extends Youtube{                                
    public channelname :string="T series";
    private TotalVideosOfTseries:number=500;                   //properties of channel of youtube
    private Totalplaylists:number=40;
    public TotalSubscribers:string="30 millions";
    constructor(public maxvideosize:string,public maxRuntime:string,){
        super(maxvideosize,maxRuntime);
    }

}

class Video extends Tseries{
    constructor(public maxvideosize:string,public maxRuntime:string,
        public VideoTitle:string,
        public type:string,
        public Album:string,
        public videoPublisheddate : string,public videoSize:string,
        public videolength: string,public description:string,
    public NumberofLikes:number,
    public numberOfdislikes:number,
    public numberofcomments:number,                       //constructor 
    public videourl:string,                              // video song properties
    public subtitleurl:string,
){
        super(maxvideosize,maxRuntime);
        this.VideoTitle=VideoTitle;
        this.videoPublisheddate=videoPublisheddate;
        this.videoSize=videoSize;
        this.videolength=videolength;
        this.description=description;
        this.NumberofLikes=NumberofLikes;
        this.numberOfdislikes=numberOfdislikes;
        this.numberofcomments=numberofcomments;
        this.videourl=videourl;
        this.subtitleurl=subtitleurl;
    }
    Details=(x)=>{
        console.log(x);
    }
    play=()=>{
    
    console.log(this.VideoTitle+ "  " + this.videoPublisheddate+"  "+this.description);
    return this.videourl;
       
    }
    pause=()=>{
        console.log("video paused");
    }
    stop=()=>{
        console.log("video stopped");
    }
    replay=()=>{
        
        console.log("video replayed");
    }
    autoPlay=()=>{
     console.log("play  next song")
     }
     chanelname=()=>{
         console.log("channel name"+this.channelname);
     }

} 

let cheezbadi = new Video("6 gb","600 mins","Cheez badi","videosong","machine","20th nov 2016","400mb",
"6mins","xyz",233300,40000,300,"https://www.youtube.com/watch?v=Ek17-Sh7jtA","https://www.yousubtile.com/cheezbadi")
console.log(cheezbadi.play()+"  "+cheezbadi.chanelname());
cheezbadi.Details(cheezbadi);