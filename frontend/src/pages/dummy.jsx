<table className="table table-borderless">
    <thead>
        <tr>
            <th className="border-bottom">Ticket ID</th>
            <th className="border-bottom">Subject</th>
            <th className="border-bottom">Status</th>
            <th className="border-bottom">Last Update</th>
            <th className="border-bottom">Support</th>
            <th className="border-bottom"></th>
        </tr>
    </thead>
    <tbody>
        {/* Ticket Row 1 */}
        <tr data-bs-toggle="collapse" data-bs-target="#ticket1" className="cursor-pointer" aria-expanded="false" aria-controls="ticket1">
            <td>#0001</td>
            <td>Password Reset</td>
            <td><span className="text-primary">In Progress</span></td>
            <td>July 14, 2015</td>
            <td>Wade Warren</td>
            <td><i className="bi bi-chevron-down"></i></td>
        </tr>
        <tr className="collapse" id="ticket1">
            <td colSpan="6" className="bg-light">
                <div className="border-bottom">
                    <div className="text-muted fs-13 mb-1">Apr 27, 2023 11:32 AM</div>
                    <h6 className="fs-14">Hi, I'm unable to login to my account since yesterday. Please help.</h6>
                    <div className="mb-2 btn btn-light border py-0 px-2 border-bottom">
                        <span className="text-muted fs-13 ms-1">screenshot.png</span>
                    </div>
                </div>
                <div className="border-bottom mt-3">
                    <div className="text-muted my-2 fs-13">Apr 28, 2023 11:15 AM</div>
                    <p>Hello John, we are looking into it.</p>
                </div>
                <div className="mt-3">
                    <textarea className="form-control bg-light mb-3 fs-14" placeholder="Write your reply" rows="3" disabled></textarea>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-secondary btn-sm">Upload Attachment</button>
                        <button className="btn btn-primary btn-sm">Send reply</button>
                    </div>
                </div>
            </td>
        </tr>

        {/* Ticket Row 2 */}
        <tr data-bs-toggle="collapse" data-bs-target="#ticket2" className="cursor-pointer" aria-expanded="false" aria-controls="ticket2">
            <td>#0002</td>
            <td>Issue with Checkout</td>
            <td><span className="text-success">Completed</span></td>
            <td>July 14, 2015</td>
            <td>Esther Howard</td>
            <td><i className="bi bi-chevron-down"></i></td>
        </tr>
        <tr className="collapse" id="ticket2">
            <td colSpan="6" className="bg-light">
                {/* Add content if needed */}
                <p className="text-muted">This ticket is completed and resolved.</p>
            </td>
        </tr>

        {/* Ticket Row 3 */}
        <tr data-bs-toggle="collapse" data-bs-target="#ticket3" className="cursor-pointer" aria-expanded="false" aria-controls="ticket3">
            <td>#0003</td>
            <td>Password Reset</td>
            <td><span className="text-primary">In Progress</span></td>
            <td>July 14, 2015</td>
            <td>Wade Warren</td>
            <td><i className="bi bi-chevron-down"></i></td>
        </tr>
        <tr className="collapse" id="ticket3">
            <td colSpan="6" className="bg-light">
                <p className="text-muted">We're still investigating this issue.</p>
            </td>
        </tr>
    </tbody>
</table>