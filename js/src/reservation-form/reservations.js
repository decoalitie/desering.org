const LS_KEY = 'reservations';
let reservations = null;

export function lsTryCatcher(fn) {
    try {
        fn();
    } catch {
        console.warn('Could not access localStorage');
    }
}

export function getReservations() {
    if (!reservations) {
        lsTryCatcher(() => {
            const storage = localStorage.getItem(LS_KEY);
            if (storage) {
                reservations = JSON.parse(storage);
            }
        });
    }
    return reservations || [];
}

export function removeOldReservations(validDates) {
    const current = getReservations();

    if (current && current.length) {
        const filtered = current.filter(reservation => validDates.includes(reservation.date));
        lsTryCatcher(() => {
            localStorage.setItem(LS_KEY, JSON.stringify(filtered));
        });
        reservations = filtered;
    }
}

export function storeReservation(data) {
    const items = getReservations();
    items.push(data);
    lsTryCatcher(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(items));
    });
}

export function getReservationsForDate(date) {
    return getReservations().filter((reservation) => reservation.date === date);
}
