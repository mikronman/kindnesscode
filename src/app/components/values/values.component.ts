import { Component } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent {
  values = [
    { title: 'Organic', subtitle: 'Kindness', description: `It's a tough world out there, right? Organic Kindness is like a balm, mending divisions and bridging gaps. It's about caring, understanding, and coming together. For our team, it means treating each other with empathy and a real human touch.`, class: 'kindness' },
    { title: 'Proactive', subtitle: 'Ownership', description: `This is about rolling up our sleeves and getting our hands dirty to make the world a better place. It's saying "I can do something about this," and then doing it. For us, it's about taking responsibility, sparking action, and really making our mark.`, class: 'ownership' },
    { title: 'Transparent', subtitle: 'Integrity', description: `It's simple - honesty's the best policy. By being real and reliable, we build trust with people. Within our team, it's about open chats, respect, and sticking to our word. No secrets, no games - just us being us.`, class: 'integrity' },
    { title: 'Inclusive', subtitle: 'Diversity', description: `Everyone's got a unique story to tell, right? By celebrating these differences, we make a world that's a bit more welcoming. For our team, it's about valuing our mix of backgrounds and ideas. It leads to great chats, new insights, and a really cool place to work.`, class: 'diversity' }
  ];
}
