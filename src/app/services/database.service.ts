import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Dev {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    private database: SQLiteObject;
    private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

    logs = new BehaviorSubject([]);
    products = new BehaviorSubject([]);

    constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
        this.plt.ready().then(() => {
            this.sqlite.create({
                name: 'logs.db',
                location: 'default'
            })
                .then((db: SQLiteObject) => {
                    this.database = db;
                    // this.seedDatabase();
                });
        });
    }

    /**
     * seed db with dummy data
     */
    seedDatabase() {
        this.http.get('assets/seed.sql', { responseType: 'text' })
            .subscribe(sql => {
                this.sqlitePorter.importSqlToDb(this.database, sql)
                    .then(_ => {
                        this.loadLogs();
                        this.dbReady.next(true);
                    })
                    .catch(e => console.error(e));
            });
    }

    /**
     * get db state
     */
    getDatabaseState() {
        return this.dbReady.asObservable();
    }
    /**
     * get cuurent logs
     */
    getLogs(): Observable<Dev[]> {
        return this.logs.asObservable();
    }

    /**
     * load all current logs
     */
    loadLogs() {
        return this.database.executeSql('SELECT * FROM log', []).then(data => {
            const logs: Dev[] = [];

            if (data.rows.length > 0) {
                for (let i = 0; i < data.rows.length; i++) {

                    logs.push({
                        id: data.rows.item(i).id,
                        name: data.rows.item(i).name
                    });
                }
            }
            this.logs.next(logs);
            console.log(logs);
        });
    }

    /**
     * @param description string
     * add new log
     */
    addLog(description) {
        return this.database.executeSql('INSERT INTO log (description) VALUES (?)', description).then(data => {
            console.log(description + 'log added');
            this.loadLogs();
        });
    }
}
