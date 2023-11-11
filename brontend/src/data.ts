


export type JournalEntry = {
    id: number;
    day: number;
    month: string;
    when: string;
    title: string;
    body: string;
}
export type JournalEntries = JournalEntry[]

export const journalEntries: JournalEntries = [
    {
        id: 0,
        day: 11,
        month: 'November',
        when: 'Today',
        title: "Entry 1",
        body: "Pain",
    },
    {
        id: 1,
        day: 10,
        month: 'November',
        when: 'Yesterday',
        title: "Entry 2",
        body: "Pain",
    },
    {
        id: 2,
        day: 9,
        month: 'November',
        when: 'Thursday',
        title: "Entry 3",
        body: "Pain",
    },
    {
        id: 3,
        day: 8,
        month: 'November',
        when: 'Wednesday',
        title: "Entry 4",
        body: "Pain",
    },
    {
        id: 4,
        day: 7,
        month: 'November',
        when: 'Tuesday',
        title: "Entry 5",
        body: "Pain",
    },
    {
        id: 5,
        day: 6,
        month: 'November',
        when: 'Monday',
        title: "Entry 6",
        body: "Pain",
    },
    {
        id: 6,
        day: 5,
        month: 'November',
        when: 'Sunday',
        title: "Entry 6",
        body: "Pain",
    },
    {
        id: 7,
        day: 4,
        month: 'November',
        when: 'Saturday',
        title: "Entry 6",
        body: "Pain",
    },
];