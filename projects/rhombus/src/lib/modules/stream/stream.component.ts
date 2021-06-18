import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IStreamData } from './stream';
import { StreamService } from './stream.service';

@Component({
  selector: 'rh-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class RhStreamComponent implements OnInit {

  streamData: IStreamData;
  video_url: SafeResourceUrl;
  chat_url: SafeResourceUrl;

  constructor(public media: MediaObserver, private streamService: StreamService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.streamService.getStreamingData$().subscribe(res => {
      // change to collection for multi-dynasty collection
      this.streamData = res[0];
      console.log(this.streamData);

      this.video_url= this.sanitizer.bypassSecurityTrustResourceUrl(this.streamData.video_url);
      this.chat_url= this.sanitizer.bypassSecurityTrustResourceUrl(this.streamData.chat_url);
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
