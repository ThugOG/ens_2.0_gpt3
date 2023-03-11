import ChatCard from "./ChatCard";

const Information = () => {
  return (
    <div className="info_gpt3">
      <div className="info_comp">
        <p className="heading">Your web3 username</p>
        <div className="para_head">
          <p className="heading_children">
            No more sandboxed usernames. Own your username, store an avatar and
            other profile data, and use it across services.
          </p>
        </div>
        <div className="ens_add">
          <div className="ens_domains">nick.pns</div>
          <div className="address">0xf30...90</div>
        </div>
      </div>
      <ChatCard />
    </div>
  );
};
export default Information;
