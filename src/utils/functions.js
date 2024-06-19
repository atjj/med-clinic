export function groupDoctorsByService(doctors) {
    let groupedDoctors = {};
    
    
    doctors.forEach(doctor => {
        let service = doctor.service;


        if (!groupedDoctors[service]) {
            groupedDoctors[service] = {
                profName: service,
                data: []
            };
        }

        groupedDoctors[service].data.push({
            doctor_id: doctor.doctor_id,
            img: doctor.image,
            name: `${doctor.name} ${doctor.surName}`,
            prof: doctor.position
        });

        
    });

    return Object.values(groupedDoctors);
}