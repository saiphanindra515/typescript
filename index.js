var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// super class
var Youtube = /** @class */ (function () {
    function Youtube(maxVideosize, maxRuntime) {
        this.maxVideosize = maxVideosize;
        this.maxRuntime = maxRuntime;
        this.numberOfchannels = 40000;
        this.TotalVideos = "5 million"; //properties of youtube channel
        this.numberofAccounts = "2 million";
        this.maxVideosize = maxVideosize;
        this.maxRuntime = maxRuntime;
    }
    return Youtube;
}());
// child class of youtube
var Tseries = /** @class */ (function (_super) {
    __extends(Tseries, _super);
    function Tseries(maxvideosize, maxRuntime) {
        var _this = _super.call(this, maxvideosize, maxRuntime) || this;
        _this.maxvideosize = maxvideosize;
        _this.maxRuntime = maxRuntime;
        _this.channelname = "T series";
        _this.TotalVideosOfTseries = 500; //properties of channel of youtube
        _this.Totalplaylists = 40;
        _this.TotalSubscribers = "30 millions";
        return _this;
    }
    return Tseries;
}(Youtube));
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(maxvideosize, maxRuntime, VideoTitle, type, Album, videoPublisheddate, videoSize, videolength, description, NumberofLikes, numberOfdislikes, numberofcomments, //constructor 
    videourl, // video song properties
    subtitleurl) {
        var _this = _super.call(this, maxvideosize, maxRuntime) || this;
        _this.maxvideosize = maxvideosize;
        _this.maxRuntime = maxRuntime;
        _this.VideoTitle = VideoTitle;
        _this.type = type;
        _this.Album = Album;
        _this.videoPublisheddate = videoPublisheddate;
        _this.videoSize = videoSize;
        _this.videolength = videolength;
        _this.description = description;
        _this.NumberofLikes = NumberofLikes;
        _this.numberOfdislikes = numberOfdislikes;
        _this.numberofcomments = numberofcomments;
        _this.videourl = videourl;
        _this.subtitleurl = subtitleurl;
        _this.Details = function (x) {
            console.log(x);
        };
        _this.play = function () {
            console.log(_this.VideoTitle + "  " + _this.videoPublisheddate + "  " + _this.description);
            return _this.videourl;
        };
        _this.pause = function () {
            console.log("video paused");
        };
        _this.stop = function () {
            console.log("video stopped");
        };
        _this.replay = function () {
            console.log("video replayed");
        };
        _this.autoPlay = function () {
            console.log("play  next song");
        };
        _this.chanelname = function () {
            console.log("channel name" + _this.channelname);
        };
        _this.VideoTitle = VideoTitle;
        _this.videoPublisheddate = videoPublisheddate;
        _this.videoSize = videoSize;
        _this.videolength = videolength;
        _this.description = description;
        _this.NumberofLikes = NumberofLikes;
        _this.numberOfdislikes = numberOfdislikes;
        _this.numberofcomments = numberofcomments;
        _this.videourl = videourl;
        _this.subtitleurl = subtitleurl;
        return _this;
    }
    return Video;
}(Tseries));
var cheezbadi = new Video("6 gb", "600 mins", "Cheez badi", "videosong", "machine", "20th nov 2016", "400mb", "6mins", "xyz", 233300, 40000, 300, "https://www.youtube.com/watch?v=Ek17-Sh7jtA", "https://www.yousubtile.com/cheezbadi");
console.log(cheezbadi.play() + "  " + cheezbadi.chanelname());
cheezbadi.Details(cheezbadi);
