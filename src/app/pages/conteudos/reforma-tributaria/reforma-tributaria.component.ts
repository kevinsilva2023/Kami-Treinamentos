import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollNavigateService } from 'src/app/services/scroll-navigate.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reforma-tributaria',
  templateUrl: './reforma-tributaria.component.html',
  styleUrls: ['./reforma-tributaria.component.scss']
})
export class ReformaTributariaComponent {
  isSidebarCollapsed = false;
  activeSectionLabel = '';
  private subscription = new Subscription();

  constructor(private scrollService: ScrollNavigateService, private location: Location) { }

  ngOnInit(): void {
    this.subscription.add(
      this.scrollService.activeItemLabel$.subscribe(label => {
        this.activeSectionLabel = label;
      })
    );
  }

  onSidebarToggled(isCollapsed: boolean): void {
    this.isSidebarCollapsed = isCollapsed;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    this.location.back(); // Volta para a página anterior
  }
}
