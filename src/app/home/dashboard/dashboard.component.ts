import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['customer', 'menu', 'total_payment', 'status'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  pageSizeOptions = [20, 50, 100];
  dataLength!: number;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor() {
    this.dataSource.data = DashboardOrders;
    this.dataLength = DashboardOrders.length;
  }

  ngOnInit(): void {
  }

  getStatusColor(status: string) {
    switch (status) {
      case 'Completed':
        return 'bg-alt-green txt-green';
      case 'Preparing':
        return 'bg-alt-purple txt-purple';
      case 'Pending':
        return 'bg-alt-orange txt-orange';
      default:
        return 'bg-alt-green txt-green';
    }
  }

}

export const DashboardOrders = [
  {
    customer: "Eren Jaegar",
    menu: "Spicy seasoned seafood noodles",
    total_payment: 125,
    status: "Completed",
  },
  {
    customer: "Reiner Braunn",
    menu: "Salted Pasta with mushroom sauce",
    total_payment: 145,
    status: "Preparing",
  },
  {
    customer: "Levi Ackerman",
    menu: "Beef dumpling in hot and sour soup",
    total_payment: 105,
    status: "Pending",
  },
  {
    customer: "Historia Reiss",
    menu: "Hot spicy fried rice with omelet",
    total_payment: 45,
    status: "Completed",
  },
  {
    customer: "Hanji Zoe",
    menu: "Hot spicy fried rice with omelet",
    total_payment: 245,
    status: "Completed",
  }
];